package net.xdabi.fifa.apis.tweet

import javax.validation.constraints.NotBlank

data class TweetCreateRequestBody(

    @NotBlank
    val text: String,
    val image: String
)

data class CommentRequestBody(
    @NotBlank
    val tweetId: String,

    @NotBlank
    val text: String,
)