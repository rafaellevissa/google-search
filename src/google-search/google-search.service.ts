import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GoogleSearch } from './google-search.schema';

@Injectable()
export class GoogleSearchService {
  constructor(
    @InjectModel(GoogleSearch.name)
    private readonly resultModel: Model<GoogleSearch>,
  ) {}

  public async save(result: GoogleSearch): Promise<GoogleSearch> {
    const newResult = new this.resultModel(result);
    return await newResult.save();
  }
}
