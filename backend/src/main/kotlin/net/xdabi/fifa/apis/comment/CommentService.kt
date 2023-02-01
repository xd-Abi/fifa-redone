package net.xdabi.fifa.apis.comment

import org.springframework.stereotype.Service
import java.util.*

@Service
class CommentService(private val userRepository: CommentRepository) {

    fun findById(id: String): Optional<Comment> {
        return userRepository.findById(UUID.fromString(id))
    }

    fun save(comment: Comment): Comment {
        return userRepository.save(comment)
    }
}