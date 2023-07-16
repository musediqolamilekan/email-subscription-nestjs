/* eslint-disable prettier/prettier */
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('subscribe')
  async subscribe(@Req() req: any) {
    try {
      await this.emailService.subscribeUser(req.user._id);
      return {
        message: 'Subscription successful. A confirmation email has been sent.',
      };
    } catch (error) {
      throw error;
    }
  }
}
