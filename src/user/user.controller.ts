/* eslint-disable prettier/prettier */
import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from 'src/auth/dto';
import { User } from './user.schema';
import { LoginUserDto } from 'src/auth/dto';

@Controller('users')
export class UserController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async register(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.authService.register(createUserDto);
  }

  @Post('/login')
  async login(
    @Body(ValidationPipe) loginUserDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(loginUserDto);
  }
}
