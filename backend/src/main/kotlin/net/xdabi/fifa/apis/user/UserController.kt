package net.xdabi.fifa.apis.user

import net.xdabi.fifa.common.annotation.JwtSubject
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("api/v1/me")
class UserController(@Autowired private val userService: UserService) {

    @GetMapping
    fun getMe(@JwtSubject uid: String): ResponseEntity<List<User>> {

        return ResponseEntity.ok().body(userService.findAll())
    }

    @PostMapping
    fun createMe() {
        userService.save(
            User(
                UUID.randomUUID(),
                "test",
                "test@gmail.com",
                "22",
                Gender.MALE,
            )
        )
    }
}