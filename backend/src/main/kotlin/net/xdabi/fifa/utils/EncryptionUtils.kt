package net.xdabi.fifa.utils

import org.springframework.security.crypto.bcrypt.BCrypt

class EncryptionUtils {

    companion object {

        fun genSalt(rounds: Int): String {
            return BCrypt.gensalt(rounds)
        }

        fun hash(str: String, salt: String): String {
            return BCrypt.hashpw(str, salt)
        }
    }
}