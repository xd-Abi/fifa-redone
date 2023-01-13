package net.xdabi.fifa.apis.user

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import java.util.*

@Entity(name = "users")
data class User(
    @Id
    @Column(name = "uid", unique = true)
    val uid: UUID? = UUID.randomUUID(),
    @Column(name = "username", unique = true)
    val username: String,
    @Column(name = "email", unique = true)
    val email: String,
    val firstname: String,
    val lastname: String,
    val birthdate: String,
    val gender: Gender,
    val verified: Boolean = false,
    val picture: String? = null,
) {

    private constructor() : this(UUID.randomUUID(), "", "", "", "", "", Gender.OTHER, false, null)
}

enum class Gender {
    MALE,
    FEMALE,
    OTHER
}