package net.xdabi.fifa.utils

import com.fasterxml.jackson.databind.ObjectMapper
import net.xdabi.fifa.common.data.JwtPayload
import java.util.Base64

fun String.getJwtPayload(): JwtPayload {
    val parts = this.split(".")
    if (parts.size != 3) {
        throw IllegalArgumentException("Invalid token")
    }

    val payload = String(Base64.getDecoder().decode(parts[1]))
    val mapper = ObjectMapper()
    val jsonNode = mapper.readTree(payload)

    return JwtPayload(
        jsonNode.get("sub").textValue(),
        jsonNode.get("iat").asLong(),
        jsonNode.get("exp").asLong(),
    )
}