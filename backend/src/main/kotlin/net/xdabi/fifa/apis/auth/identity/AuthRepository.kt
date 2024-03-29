package net.xdabi.fifa.apis.auth.identity

import net.xdabi.fifa.apis.user.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface AuthIdentityRepository : JpaRepository<AuthIdentity, UUID> {

    fun findByUser(user: User): Optional<AuthIdentity>
}

