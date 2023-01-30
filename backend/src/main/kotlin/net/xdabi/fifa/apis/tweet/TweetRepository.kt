package net.xdabi.fifa.apis.tweet

import net.xdabi.fifa.apis.user.User
import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface TweetRepository : JpaRepository<Tweet, UUID> {

    fun findByUser(user: User): Optional<Tweet>
}