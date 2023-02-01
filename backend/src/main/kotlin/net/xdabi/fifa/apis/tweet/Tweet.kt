package net.xdabi.fifa.apis.tweet

import jakarta.persistence.*
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.util.*

@Entity(name = "tweets")
data class Tweet(
    @Id
    val id: UUID,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val creator: User?,

    val text: String,
    val image: String?,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val likes: MutableList<User>
    ) {

    private constructor(): this(UUID.randomUUID(), null, "", null, mutableListOf())
}
