package net.xdabi.fifa.apis.auth.provider

import jakarta.persistence.*
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.util.*

@Entity(name = "auth")
data class AuthProvider(
    @Id
    val id: UUID,

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val user: User?,

    val password: String,

    val salt: String,

    var refreshToken: String
) {

    private constructor() : this(UUID.randomUUID(), null, "", "", "")
}