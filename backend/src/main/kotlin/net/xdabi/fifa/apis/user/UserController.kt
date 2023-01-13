package net.xdabi.fifa.apis.user

import net.xdabi.fifa.common.annotation.JwtSubject
import net.xdabi.fifa.common.annotation.Protected
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/v1/me")
class UserController(@Autowired private val userService: UserService) {

    @Protected
    @GetMapping
    fun getMe(@JwtSubject uid: String): ResponseEntity<User?> {
        val user = userService.findById(uid)

        if (user.isEmpty) {
            return ResponseEntity.badRequest().body(null)
        }

        return ResponseEntity.ok().body(user.get())
    }
}