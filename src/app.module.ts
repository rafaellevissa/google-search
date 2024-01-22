// backend-nestjs/src/app.module.ts

import { Module } from '@nestjs/common';
import { GoogleSearchModule } from './google-search/google-search.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://google-search-mongodb/googlesearch'),
    GoogleSearchModule,
  ],
})
export class AppModule {}
