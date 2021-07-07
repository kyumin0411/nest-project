import { Controller, Get } from '@nestjs/common';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Get()
  async show() {
    return await this.foodsService.findAll();
  }
}
