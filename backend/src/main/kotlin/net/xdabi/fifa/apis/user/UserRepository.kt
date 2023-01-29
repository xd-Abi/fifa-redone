package net.xdabi.fifa.apis.user

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.*

interface UserRepository : JpaRepository<User, UUID> {

    fun findByUsername(username: String): Optional<User>

    fun findByEmail(username: String): Optional<User>

    @Query("SELECT u FROM users u WHERE u.email LIKE %:value% OR u.username LIKE %:value%")
    fun findByEmailOrUsername(@Param("value") value: String): Optional<User>
}