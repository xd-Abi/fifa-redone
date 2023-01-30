package net.xdabi.fifa.apis.tweet

import javax.validation.constraints.NotBlank

data class TweetCreateRequestBody(

    @NotBlank
    val text: String,
    val image: String
)