package net.xdabi.fifa.apis.user

import org.springframework.stereotype.Service
import java.util.*

@Service
class UserService (private val userRepository: UserRepository) {

    fun findAll(): List<User> {
        return userRepository.findAll();
    }

    fun findById(uid: String): Optional<User> {
        return userRepository.findById(UUID.fromString(uid));
    }

    fun findByUsername(username: String): Optional<User> {
        return userRepository.findByUsername(username)
    }

    fun findByEmail(email: String): Optional<User> {
        return userRepository.findByEmail(email)
    }

    fun save(user: User) {
        userRepository.save(user)
    }
}