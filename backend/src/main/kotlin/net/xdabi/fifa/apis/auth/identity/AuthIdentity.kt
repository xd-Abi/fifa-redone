package net.xdabi.fifa.apis.auth.identity

import jakarta.persistence.*
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.util.*

@Entity(name = "identities")
data class AuthIdentity(
    @Id
    val id: UUID,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val user: User?,

    val provider: String,
    val connection: String,
    val isSocial: Boolean,
) {
    private constructor() : this(UUID.randomUUID(), null, "", "", false)
}