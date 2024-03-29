package net.xdabi.fifa.apis.comment

import jakarta.persistence.*
import net.xdabi.fifa.apis.user.User
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.util.*

@Entity(name = "comments")
data class Comment(
    @Id
    val id: UUID,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "uid", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    val creator: User?,

    val text: String,
) {
    private constructor(): this(UUID.randomUUID(), null, "")

}
