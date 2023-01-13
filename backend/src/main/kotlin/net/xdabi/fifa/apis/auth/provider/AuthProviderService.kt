package net.xdabi.fifa.apis.auth.provider

import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthProviderService(private val authProviderRepository: AuthProviderRepository) {

    fun findByRefreshToken(refreshToken: String): Optional<AuthProvider> {
        return authProviderRepository.findByRefreshToken(refreshToken)
    }

    fun save(authProvider: AuthProvider): AuthProvider {
        return authProviderRepository.save(authProvider)
    }
}