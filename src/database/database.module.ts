import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestjs:nightwalker@cluster0.lazeyah.mongodb.net/?retryWrites=true&w=majority',
      {
        connectionFactory: (connection) => {
          // connection event handlers
          connection.on('connected', () => {
            console.log('Mongoose has successfully connected');
          });
          connection.on('reconnected', () => {
            console.log('Mongoose has reconnected');
          });
          connection.on('disconnected', () => {
            console.log('Mongoose connection has disconnected');
          });
          connection.on('close', () => {
            console.log('Mongoose connection has closed');
          });
          connection.on('error', (err) => {
            console.log('Mongoose connection has occured \n' + err);
          });

          return connection;
        },
      },
    ),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
