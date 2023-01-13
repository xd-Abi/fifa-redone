package net.xdabi.fifa.apis.auth.identity

import net.xdabi.fifa.apis.user.User
import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthIdentityService(private val authIdentityRepository: AuthIdentityRepository) {

    fun findByUser(user: User): Optional<AuthIdentity> {
        return authIdentityRepository.findByUser(user)
    }

    fun save(authIdentity: AuthIdentity): AuthIdentity {
        return authIdentityRepository.save(authIdentity)
    }
}