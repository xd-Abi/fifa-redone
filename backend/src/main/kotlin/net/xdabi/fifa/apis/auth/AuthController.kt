package net.xdabi.fifa.apis.auth

import net.xdabi.fifa.apis.auth.identity.AuthIdentity
import net.xdabi.fifa.apis.auth.identity.AuthIdentityService
import net.xdabi.fifa.apis.auth.provider.AuthProvider
import net.xdabi.fifa.apis.auth.provider.AuthProviderService
import net.xdabi.fifa.apis.user.User
import net.xdabi.fifa.apis.user.UserService
import net.xdabi.fifa.utils.EncryptionUtils
import net.xdabi.fifa.utils.ResponseUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("api/v1/auth")
class AuthController(
    @Autowired private val authIdentityService: AuthIdentityService,
    @Autowired private val authProviderService: AuthProviderService,
    @Autowired private val userService: UserService,
    @Autowired private val jwtService: JwtService,
) {

    @PostMapping("sign-up")
    fun signUp(@Valid @RequestBody body: AuthRegisterRequestBody): ResponseEntity<Any> {
        if (userService.findByEmail(body.email.lowercase()).isPresent) {
            return ResponseUtils.badRequest("Email already exists")
        }
        if (userService.findByUsername(body.username.lowercase()).isPresent) {
            return ResponseUtils.badRequest("Username already exists")
        }

        val user = this.userService.save(
            User(
                UUID.randomUUID(),
                body.username.lowercase(),
                body.email.lowercase(),
                body.firstname,
                body.lastname,
                body.birthdate,
                body.gender,
            )
        )

        authIdentityService.save(
            AuthIdentity(
                UUID.randomUUID(),
                user,
                "fifa",
                "Email-Password-Connection",
                false,
            )
        )

        val salt = EncryptionUtils.genSalt(10)
        val hashedPassword = EncryptionUtils.hash(body.password, salt)
        val refreshToken = EncryptionUtils.hash(Math.random().toString(), EncryptionUtils.genSalt(4))

        authProviderService.save(
            AuthProvider(
                UUID.randomUUID(),
                user,
                hashedPassword,
                salt,
                refreshToken
            )
        )

        val accessToken = jwtService.create(user.uid.toString())
        return ResponseUtils.ok(
            mapOf(
                "accessToken" to accessToken,
                "refreshToken" to refreshToken,
            )
        )
    }

    @PostMapping("sign-in")
    fun signIn(@Valid @RequestBody body: AuthSignInRequestBody): ResponseEntity<Any> {
        val user = userService.findByEmailOrUsername(body.emailOrUsername.lowercase());
        if (!user.isPresent) {
            return ResponseUtils.badRequest("Email or Username not found")
        }

        val identity = authProviderService.findByUser(user.get());
        if (!identity.isPresent) {
            return ResponseUtils.badRequest("Auth Identity not found")
        }

        val hashedPassword = EncryptionUtils.hash(body.password, identity.get().salt);
        if (hashedPassword != identity.get().password) {
            return ResponseUtils.badRequest("Access denied")
        }

        val refreshToken = EncryptionUtils.hash(Math.random().toString(), EncryptionUtils.genSalt(4))
        val accessToken = jwtService.create(user.get().uid.toString())

        identity.get().refreshToken = refreshToken
        authProviderService.save(identity.get())

        return ResponseUtils.ok(
            mapOf(
                "accessToken" to accessToken,
                "refreshToken" to refreshToken,
            )
        )
    }


    @GetMapping("check-username")
    fun checkUsername(@RequestParam(value = "username", required = true) username: String): ResponseEntity<Any> {
        if (userService.findByUsername(username.lowercase()).isPresent) {
            return ResponseUtils.badRequest("Username already exists")
        }

        return ResponseUtils.ok("Username does not exists")
    }

    @GetMapping("check-email")
    fun checkEmail(@RequestParam(value = "email", required = true) email: String): ResponseEntity<Any> {
        if (userService.findByEmail(email.lowercase()).isPresent) {
            return ResponseUtils.badRequest("Email already exists")
        }

        return ResponseUtils.ok("Email does not exists")
    }

    @PostMapping("refresh")
    fun refreshTokens(@Valid @RequestBody body: RefreshTokenRequestBody): ResponseEntity<Any> {

        val identity = authProviderService.findByRefreshToken(body.refreshToken)

        if (identity.isEmpty) {
            return ResponseUtils.badRequest("Refresh token not found")
        }

        val refreshToken = EncryptionUtils.hash(Math.random().toString(), EncryptionUtils.genSalt(4))
        val accessToken = jwtService.create(identity.get().user?.uid.toString())

        identity.get().refreshToken = refreshToken
        authProviderService.save(identity.get())

        return ResponseUtils.ok(
            mapOf(
                "accessToken" to accessToken,
                "refreshToken" to refreshToken,
            )
        )
    }

}