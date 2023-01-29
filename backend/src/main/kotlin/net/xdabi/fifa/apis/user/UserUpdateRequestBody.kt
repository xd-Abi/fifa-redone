package net.xdabi.fifa.apis.user

import javax.validation.constraints.*

data class AuthRegisterRequestBody(
    @NotBlank
    @Size(max = 75)
    val firstname: String,

    @NotBlank
    @Size(max = 75)
    val lastname: String,

    @NotBlank
    @Past(message = "Birthdate must be in the past")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$")
    val birthdate: String,

    @NotBlank
    val gender: Gender,
)