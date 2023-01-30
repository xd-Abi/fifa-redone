package net.xdabi.fifa.apis.tweet

import net.xdabi.fifa.apis.user.UserService
import net.xdabi.fifa.common.annotation.JwtSubject
import net.xdabi.fifa.common.annotation.Protected
import net.xdabi.fifa.utils.ResponseUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("api/v1/tweet")
class TweetController(
    @Autowired private val tweetService: TweetService,
    @Autowired private val userService: UserService
) {

    @Protected
    @PostMapping
    fun createTweet(@JwtSubject uid: String, @Valid @RequestBody body: TweetCreateRequestBody): ResponseEntity<Any> {
        val user = userService.findById(uid)

        if (user.isEmpty) {
            return ResponseUtils.badRequest("User not found")
        }

        val id = UUID.randomUUID();
        this.tweetService.save(
            Tweet(id, user.get(), body.text, body.image)
        )

        return ResponseUtils.ok(mapOf(
            "id" to id
        ))
    }

    @GetMapping
    fun getTweet(@RequestParam(name = "tweet") tweetId: String?): ResponseEntity<Any> {

        if (tweetId == null) {
            val tweets = this.tweetService.findAll()
            return ResponseUtils.ok(tweets)
        }

        val tweet = this.tweetService.findById(tweetId);

        if (tweet.isEmpty) {
            return ResponseUtils.badRequest("Tweet not found")
        }

        return ResponseUtils.ok(tweet)
    }
}