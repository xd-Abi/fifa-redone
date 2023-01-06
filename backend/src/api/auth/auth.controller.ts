import { Body, Controller, Post } from "@nestjs/common";
import { ISignUpBody } from "./auth.interfaces";

@Controller("auth")
export class AuthController {

    @Post("signup")
    signUp(@Body() body: ISignUpBody) {
        return {
            message: "Signup Successful"
        }
    }
}