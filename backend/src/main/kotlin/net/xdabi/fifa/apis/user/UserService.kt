package net.xdabi.fifa.apis.user

import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService (private val userRepository: UserRepository) {

    fun findById(uid: String): Optional<User> {
        return userRepository.findById(UUID.fromString(uid));
    }

    fun findByUsername(username: String): Optional<User> {
        return userRepository.findByUsername(username)
    }

    fun findByEmail(email: String): Optional<User> {
        return userRepository.findByEmail(email)
    }

    fun save(user: User): User {
        return userRepository.save(user)
    }
}