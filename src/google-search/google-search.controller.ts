import { Controller, Post, Body, Req, Inject } from '@nestjs/common';
import { GoogleSearchService } from './google-search.service';
import { GoogleSearch } from './google-search.schema';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('google-search')
export class GoogleSearchController {
  private readonly grpcService: any;

  constructor(
    private readonly googleSearchService: GoogleSearchService,
    @Inject('USERPROTO_PACKAGE') private grpcClient: ClientGrpc,
  ) {
    this.grpcService = this.grpcClient.getService('Search');
  }

  @Post()
  public async performSearch(@Body() searchParams: any): Promise<any> {
    const { query } = searchParams;

    const searchResults = await this.grpcService.executeSearch({
      query,
      lang: 'pt',
      country: 'BR',
    });

    await this.googleSearchService.save({
      query,
      results: searchResults,
    } as GoogleSearch);

    return searchResults;
  }
}
