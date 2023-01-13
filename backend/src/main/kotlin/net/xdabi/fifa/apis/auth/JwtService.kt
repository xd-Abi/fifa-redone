package net.xdabi.fifa.apis.auth

import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service
import java.util.*

@Service
class JwtService(
    @Value("\${security.jwt.token.secret}")
    private val secret: String,

    @Value("\${security.jwt.token.expiration}")
    private val expiration: Long
) {

    fun create(subject: String): String {
        val claims = Jwts.claims().setSubject(subject)
        val now = Date()
        val expiration = Date(now.time + expiration)

        return Jwts.builder()
            .setClaims(claims)
            .setIssuedAt(now)
            .setExpiration(expiration)
            .signWith(SignatureAlgorithm.HS256, secret)
            .compact()
    }

    fun validate(token: String): Boolean {

        try {
            Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
        } catch (e: Exception) {
            println(e.message)
            return false
        }

        return true
    }
}