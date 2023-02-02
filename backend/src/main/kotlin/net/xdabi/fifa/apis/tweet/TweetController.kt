package net.xdabi.fifa.apis.tweet

import net.xdabi.fifa.apis.comment.Comment
import net.xdabi.fifa.apis.comment.CommentService
import net.xdabi.fifa.apis.user.UserService
import net.xdabi.fifa.common.annotation.JwtSubject
import net.xdabi.fifa.common.annotation.Protected
import net.xdabi.fifa.utils.ResponseUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.DeleteMapping
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
    @Autowired private val userService: UserService,
    @Autowired private val commentService: CommentService,
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
            Tweet(id, user.get(), body.text, body.image, mutableListOf(), mutableListOf())
        )

        return ResponseUtils.ok(
            mapOf(
                "id" to id
            )
        )
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

    @Protected
    @DeleteMapping
    fun deleteTweet(@JwtSubject uid: String, @RequestParam(name = "tweet") tweetId: String): ResponseEntity<Any> {
        val user = this.userService.findById(uid)

        if (user.isEmpty) {
            return ResponseUtils.badRequest("User not found")
        }

        val tweet = this.tweetService.findById(tweetId);

        if (tweet.get().creator?.uid === user.get().uid) {
            return ResponseUtils.badRequest("Access denied")
        }

        if (tweet.isEmpty) {
            return ResponseUtils.badRequest("Tweet not found")
        }

        this.tweetService.delete(tweet.get())
        return ResponseUtils.ok("Deleted Tweet")
    }

    @Protected
    @PostMapping("like")
    fun likeTweet(@JwtSubject uid: String, @RequestParam(name = "tweet") tweetId: String): ResponseEntity<Any> {
        val user = this.userService.findById(uid)

        if (user.isEmpty) {
            return ResponseUtils.badRequest("User not found")
        }

        val tweet = this.tweetService.findById(tweetId);

        if (tweet.isEmpty) {
            return ResponseUtils.badRequest("Tweet not found")
        }

        val index = tweet.get().likes.indexOf(user.get());
        if (index != -1) {
            tweet.get().likes.removeAt(index)
        } else {
            tweet.get().likes.add(user.get())
        }

        this.tweetService.save(tweet.get())
        return ResponseUtils.ok("Updated tweet")
    }

    @Protected
    @PostMapping("comment")
    fun addComment(@JwtSubject uid: String, @Valid @RequestBody body: CommentRequestBody): ResponseEntity<Any> {
        val user = this.userService.findById(uid)

        if (user.isEmpty) {
            return ResponseUtils.badRequest("User not found")
        }

        val tweet = this.tweetService.findById(body.tweetId);

        if (tweet.isEmpty) {
            return ResponseUtils.badRequest("Tweet not found")
        }

        val comment = this.commentService.save(Comment(
            UUID.randomUUID(),
            user.get(),
            body.text
        ))

        tweet.get().comments.add(comment)
        this.tweetService.save(tweet.get())
        return ResponseUtils.ok("Updated tweet")
    }
}