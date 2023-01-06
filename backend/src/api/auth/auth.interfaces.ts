import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class ISignUpBody {

    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    username: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}