package net.xdabi.fifa.utils

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity

class ResponseUtils {

    companion object {

        fun badRequest(message: Any): ResponseEntity<Any> {
            return ResponseEntity.badRequest().body(mapOf(
                "timestamp" to System.currentTimeMillis(),
                "status" to HttpStatus.BAD_REQUEST.value(),
                "error" to HttpStatus.BAD_REQUEST.reasonPhrase,
                "message" to message,
            ))
        }

        fun created(body: Any): ResponseEntity<Any> {
            return ResponseEntity.badRequest().body(body)
        }
    }
}
