import { Module } from '@nestjs/common';
import { GoogleSearchController } from './google-search.controller';
import { GoogleSearchService } from './google-search.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GoogleSearch, GoogleSearchSchema } from './google-search.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERPROTO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'google-search-service:5443',
          package: 'broker',
          protoPath: join(__dirname, 'google-search.proto'),
        },
      },
    ]),
    MongooseModule.forFeature([
      { name: GoogleSearch.name, schema: GoogleSearchSchema },
    ]),
  ],
  controllers: [GoogleSearchController],
  providers: [GoogleSearchService],
})
export class GoogleSearchModule {}
