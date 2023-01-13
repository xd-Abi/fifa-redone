package net.xdabi.fifa.apis.auth.provider

import net.xdabi.fifa.apis.user.User
import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthProviderService(private val authProviderRepository: AuthProviderRepository) {

    fun findByUser(user: User): Optional<AuthProvider> {
        return authProviderRepository.findByUser(user)
    }

    fun save(authProvider: AuthProvider): AuthProvider {
        return authProviderRepository.save(authProvider)
    }
}