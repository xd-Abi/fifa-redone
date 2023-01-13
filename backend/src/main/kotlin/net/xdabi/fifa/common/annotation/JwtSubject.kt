package net.xdabi.fifa.common.annotation

import net.xdabi.fifa.utils.getJwtPayload
import org.springframework.core.MethodParameter
import org.springframework.web.bind.support.WebDataBinderFactory
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.method.support.ModelAndViewContainer

@Target(AnnotationTarget.VALUE_PARAMETER)
@Retention(AnnotationRetention.RUNTIME)
annotation class JwtSubject

class JwtSubjectAnnotationArgumentResolver : HandlerMethodArgumentResolver {

    override fun supportsParameter(parameter: MethodParameter): Boolean {
        return parameter.hasParameterAnnotation(JwtSubject::class.java)
    }

    override fun resolveArgument(
        parameter: MethodParameter,
        mavContainer: ModelAndViewContainer?,
        webRequest: NativeWebRequest,
        binderFactory: WebDataBinderFactory?
    ): Any {
        val authorizationHeader = webRequest.getHeader("Authorization")
            ?: throw IllegalArgumentException("Authorization header not found")

        val token = authorizationHeader.replace("Bearer ", "")
        val claims = token.getJwtPayload()

        return claims.subject
    }
}


