package net.xdabi.fifa.common.annotation

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import net.xdabi.fifa.apis.auth.JwtService
import net.xdabi.fifa.utils.ResponseUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.method.HandlerMethod
import org.springframework.web.servlet.HandlerInterceptor
import org.springframework.web.servlet.HandlerMapping

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
annotation class Protected

class ProtectedInterceptor(
    @Autowired private val jwtService: JwtService
) : HandlerInterceptor {

    override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, h: Any): Boolean {
        val handler = request.getAttribute(HandlerMapping.BEST_MATCHING_HANDLER_ATTRIBUTE) as HandlerMethod
        val method = handler.method

        if (!method.isAnnotationPresent(Protected::class.java)) {
            return true
        }

        val authorizationHeader = request.getHeader("Authorization")
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer")) {
            // @TODO: To avoid this error: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
            ResponseUtils.ok(response, "Missing Authorization header")
            return false
        }

        val token = authorizationHeader.replace("Bearer ", "")

        if (!jwtService.validate(token)) {
            ResponseUtils.unauthorized(response, "Invalid Authorization header")
            return false
        }

        return true
    }
}