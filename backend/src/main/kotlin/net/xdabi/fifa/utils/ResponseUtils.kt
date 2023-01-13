package net.xdabi.fifa.utils

import com.fasterxml.jackson.databind.ObjectMapper
import jakarta.servlet.http.HttpServletResponse
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity

class ResponseUtils {

    companion object {

        fun unauthorized(response: HttpServletResponse, message: String) {
            response.status = HttpStatus.UNAUTHORIZED.value()
            response.contentType = MediaType.APPLICATION_JSON_VALUE

            val mapper = ObjectMapper()
            val json = mapper.writeValueAsString(
                mapOf(
                    "timestamp" to System.currentTimeMillis(),
                    "status" to HttpStatus.UNAUTHORIZED.value(),
                    "error" to HttpStatus.UNAUTHORIZED.reasonPhrase,
                    "message" to message,
                )
            )

            response.writer.write(json)
            response.writer.flush()
            response.writer.close()
        }

        fun badRequest(message: Any): ResponseEntity<Any> {
            return ResponseEntity.badRequest().body(
                mapOf(
                    "timestamp" to System.currentTimeMillis(),
                    "status" to HttpStatus.BAD_REQUEST.value(),
                    "error" to HttpStatus.BAD_REQUEST.reasonPhrase,
                    "message" to message,
                )
            )
        }

        fun created(body: Any): ResponseEntity<Any> {
            return ResponseEntity.badRequest().body(body)
        }

        fun ok(body: Any): ResponseEntity<Any> {
            return ResponseEntity.ok().body(body)
        }
    }
}