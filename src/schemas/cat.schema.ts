import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop()
  breed?: string;

  @Prop()
  color?: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

/**
 * Decorator 없이 이렇게 선언해도 가능
 * export const CatSchema = new mongoose.Schema({
 *  name : String,
 *  age : Number,
 *  breed : String,
 * })
 */
