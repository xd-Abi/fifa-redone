package net.xdabi.fifa.apis.user

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface UserRepository : JpaRepository<User, UUID> {

    fun findByUsername(username: String): Optional<User>

    fun findByEmail(username: String): Optional<User>
}