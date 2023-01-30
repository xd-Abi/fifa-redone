package net.xdabi.fifa.apis.tweet

import net.xdabi.fifa.apis.user.User
import org.springframework.stereotype.Service
import java.util.Optional
import java.util.UUID

@Service
class TweetService(private val tweetRepository: TweetRepository) {

    fun findById(id: String): Optional<Tweet> {
        return tweetRepository.findById(UUID.fromString(id))
    }

    fun findAll(): List<Tweet> {
        return tweetRepository.findAll()
    }

    fun findByUser(user: User): Optional<Tweet> {
        return tweetRepository.findByUser(user)
    }

    fun save(tweet: Tweet): Tweet {
        return tweetRepository.save(tweet)
    }

    fun delete(tweet: Tweet) {
        tweetRepository.delete(tweet)
    }
}