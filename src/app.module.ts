import { Module } from '@nestjs/common';
import { GoogleSearchModule } from './google-search/google-search.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    GoogleSearchModule,
  ],
})
export class AppModule {}
