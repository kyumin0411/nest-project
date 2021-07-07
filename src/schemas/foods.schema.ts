import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodDocument = Food & Document;

@Schema()
export class Food {
  @Prop({ required: true })
  name: string;

  @Prop()
  color?: string;

  @Prop()
  country?: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
