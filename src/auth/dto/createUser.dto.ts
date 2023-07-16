/* eslint-disable prettier/prettier */
// createUser.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  readonly name: string;

  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, {
    message: 'Password is too short, minimum length is 6 characters',
  })
  readonly password: string;
}
