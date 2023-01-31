package net.xdabi.fifa.apis.tweet

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface TweetRepository : JpaRepository<Tweet, UUID> {

}