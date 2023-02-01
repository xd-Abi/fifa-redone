package net.xdabi.fifa.apis.comment

import org.springframework.data.jpa.repository.JpaRepository
import java.util.*

interface CommentRepository : JpaRepository<Comment, UUID> {
}