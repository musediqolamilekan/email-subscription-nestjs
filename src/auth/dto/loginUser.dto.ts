/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password is required' })
  readonly password: string;
}
