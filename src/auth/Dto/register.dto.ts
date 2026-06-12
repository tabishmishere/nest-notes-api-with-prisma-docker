// RegisterDto is a simple Data Transfer Object (DTO) class that defines the structure of the data required for user registration. It includes three properties: name, email, and password, all of which are of type string. This DTO can be used in the AuthController to validate and handle incoming registration requests.
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';


export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
