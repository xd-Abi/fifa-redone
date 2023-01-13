package net.xdabi.fifa.apis.auth.provider

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface AuthProviderRepository : JpaRepository<AuthProvider, UUID> {

    fun findByRefreshToken(refreshToken: String): Optional<AuthProvider>
}
