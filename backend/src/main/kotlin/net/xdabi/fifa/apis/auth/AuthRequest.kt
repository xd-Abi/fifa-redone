package net.xdabi.fifa.apis.auth

import net.xdabi.fifa.apis.user.Gender
import javax.validation.constraints.*

data class AuthRegisterRequestBody(
    @NotBlank(message = "Username is required")
    val username: String,
    @NotBlank
    @Email
    val email: String,

    @NotBlank
    @Past(message = "Birthdate must be in the past")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$")
    val birthdate: String,

    @NotBlank
    val gender: Gender,

    @NotBlank
    @Size(min = 8)
    val password: String,
)