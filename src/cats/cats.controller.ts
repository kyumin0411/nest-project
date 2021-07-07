import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Controller('cat')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async show() {
    return await this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Delete('/:name')
  async deleteOne(@Param('name') name: string) {
    return await this.catsService.deleteOne(name);
  }

  @Delete()
  async deleteOneByQuery(@Query('name') name: string) {
    return await this.catsService.deleteOne(name);
  }

  @Delete()
  async deleteAll() {
    console.log('Path is ok (delete)');
    return await this.catsService.deleteAll();
  }

  @Put('/:name')
  async updateOne(
    @Param('name') name: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    console.log('Path is ok (update)');
    console.log('updated name:', name);
    console.log('updated Cat :', updateCatDto);
    return await this.catsService.updateOne(name, updateCatDto);
  }

  @Put()
  async updateOneByQuery(
    @Query('name') name: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    console.log('updated by Query!');
    return await this.catsService.updateOne(name, updateCatDto);
  }
}
