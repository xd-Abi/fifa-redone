package net.xdabi.fifa.apis.auth.provider

import net.xdabi.fifa.apis.user.User
import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthProviderService(private val authProviderRepository: AuthProviderRepository) {

    fun findByRefreshToken(refreshToken: String): Optional<AuthProvider> {
        return authProviderRepository.findByRefreshToken(refreshToken)
    }

    fun findByUser(user: User): Optional<AuthProvider> {
        return authProviderRepository.findByUser(user)
    }

    fun save(authProvider: AuthProvider): AuthProvider {
        return authProviderRepository.save(authProvider)
    }

    fun delete(authProvider: AuthProvider) {
        authProviderRepository.delete(authProvider)
    }
}