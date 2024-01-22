import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GoogleSearch extends Document {
  @Prop()
  query: string;

  @Prop()
  location: string;

  @Prop()
  results: any[];
}

export const GoogleSearchSchema = SchemaFactory.createForClass(GoogleSearch);
