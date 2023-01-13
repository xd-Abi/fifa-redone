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
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
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
        if (userService.findByEmail(body.email).isPresent) {
            return ResponseUtils.badRequest("Email already exists")
        }
        if (userService.findByUsername(body.username).isPresent) {
            return ResponseUtils.badRequest("Username already exists")
        }

        val user = this.userService.save(
            User(
                UUID.randomUUID(),
                body.username,
                body.email,
                body.birthdate,
                body.gender,
            )
        )

        authIdentityService.save(AuthIdentity(
            UUID.randomUUID(),
            user,
            "fifa",
            "Email-Password-Connection",
            false,
        ))

        val salt = EncryptionUtils.genSalt(10);
        val hashedPassword = EncryptionUtils.hash(body.password, salt)
        val refreshToken = EncryptionUtils.hash(Math.random().toString() + salt, EncryptionUtils.genSalt(4))

        authProviderService.save(AuthProvider(
            UUID.randomUUID(),
            user,
            hashedPassword,
            salt,
            refreshToken
        ))

        val accessToken = jwtService.create(user.uid.toString())
        return ResponseUtils.created(mapOf(
            "accessToken" to accessToken,
            "refreshToken" to refreshToken,
        ))
    }
}