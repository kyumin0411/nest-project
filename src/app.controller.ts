import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import Joi from 'joi';
import { AppService } from './app.service';

import { JoiValidationPipe } from './test';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('App Controller is done!');
    return this.appService.getHello();
  }
}
