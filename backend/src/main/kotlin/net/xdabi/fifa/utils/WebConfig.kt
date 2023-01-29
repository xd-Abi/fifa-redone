package net.xdabi.fifa.utils

import jakarta.servlet.FilterChain
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import net.xdabi.fifa.apis.auth.JwtService
import net.xdabi.fifa.common.annotation.JwtSubjectAnnotationArgumentResolver
import net.xdabi.fifa.common.annotation.ProtectedInterceptor
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.InterceptorRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import java.io.IOException


@Configuration
@EnableWebMvc
class WebConfig(
    @Autowired
    private val jwtService: JwtService
) : WebMvcConfigurer {

    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**")
            .allowedHeaders("*")
            .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
    }

    override fun addInterceptors(registry: InterceptorRegistry) {
        registry.addInterceptor(ProtectedInterceptor(jwtService))
    }

    override fun addArgumentResolvers(resolvers: MutableList<HandlerMethodArgumentResolver>) {
        resolvers.add(JwtSubjectAnnotationArgumentResolver())
    }
}

@Component
class CorsFilter : OncePerRequestFilter() {
    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(
        request: HttpServletRequest, response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        response.addHeader("Access-Control-Allow-Origin", "*")
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, HEAD")
        response.addHeader("Access-Control-Allow-Headers", "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization")
        response.addHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin, Access-Control-Allow-Credentials")
        response.addHeader("Access-Control-Allow-Credentials", "true")
        response.addIntHeader("Access-Control-Max-Age", 10)
        filterChain.doFilter(request, response)
    }
}