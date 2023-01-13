package net.xdabi.fifa.apis.auth.provider

import net.xdabi.fifa.apis.user.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface AuthProviderRepository : JpaRepository<AuthProvider, UUID> {

    fun findByUser(user: User): Optional<AuthProvider>
}
