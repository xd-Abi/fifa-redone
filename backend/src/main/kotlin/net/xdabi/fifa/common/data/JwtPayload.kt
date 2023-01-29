package net.xdabi.fifa.common.data

data class JwtPayload(
    val subject: String,
    val iat: Long,
    val exp: Long
)