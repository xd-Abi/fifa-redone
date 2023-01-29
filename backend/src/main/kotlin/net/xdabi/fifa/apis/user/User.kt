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
    var firstname: String,
    var lastname: String,
    var birthdate: String,
    var gender: Gender,
    var verified: Boolean = false,
    var picture: String? = null,
) {

    private constructor() : this(UUID.randomUUID(), "", "", "", "", "", Gender.OTHER, false, null)
}

enum class Gender {
    MALE,
    FEMALE,
    OTHER
}