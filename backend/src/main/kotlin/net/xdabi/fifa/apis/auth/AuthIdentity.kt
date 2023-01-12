package net.xdabi.fifa.apis.auth

import jakarta.persistence.Entity
import jakarta.persistence.FetchType
import jakarta.persistence.ForeignKey
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction

@Entity()
@Table(name = "auth_identity")
data class AuthIdentity(
    @Id
    val id: String,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val user: User,

    val provider: String,
    val connection: String,
    val isSocial: Boolean,
)
