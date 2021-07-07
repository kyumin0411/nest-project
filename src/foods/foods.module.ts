import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from 'src/schemas/foods.schema';
import { FoodsController } from './foods.controller';
import { FoodsService } from './foods.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Food.name, schema: FoodSchema }],
      'foods',
    ),
  ],
  controllers: [FoodsController],
  providers: [FoodsService],
})
export class FoodsModule {}
