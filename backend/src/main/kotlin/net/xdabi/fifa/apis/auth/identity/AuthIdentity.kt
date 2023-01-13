package net.xdabi.fifa.apis.auth.identity

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.ForeignKey
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.OneToOne
import jakarta.persistence.Table
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.util.UUID

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