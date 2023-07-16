/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>,
    private configService: ConfigService,
  ) {}

  async subscribeUser(userId: string) {
    const user = await this.userModel.findById(userId);
    
    if (!user || user.isSubscribed) {
      throw new Error('User not found or already subscribed');
    }

    user.isSubscribed = true;
    await user.save();

    this.sendConfirmationEmail(user.email);
  }

  async sendConfirmationEmail(email: string) {
    const username = this.configService.get<string>('GMAIL_USER');
    const password = this.configService.get<string>('GMAIL_PASS');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: username,
        pass: password,
      }
    });

    const mailOptions = {
      from: username,
      to: email,
      subject: 'Subscription Confirmation',
      text: 'You have successfully subscribed to our mailing list.'
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}
