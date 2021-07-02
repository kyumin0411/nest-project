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
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cat')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    console.log('Create Cat : ');
    console.log(createCatDto);
    return 'This action adds a new cat';
  }

  @Get('show')
  findAll() {
    const result = this.catsService.findAll();
    console.log('Show Cat Array :');
    console.log(result);
    return result;
  }

  @Get('find')
  findOne(@Query('name') name: string) {
    const result_cat = this.catsService.findOne(name);
    console.log('Find Result cat :');
    console.log(result_cat);
    return `This action returns cat with the name ${name}, 
    {name : ${result_cat.name}, age:${result_cat.age}, color:${result_cat.color}}`;
  }

  @Put('update/:name')
  Update(@Param('name') name: string, @Body() updateCatDto: UpdateCatDto) {
    this.catsService.update(name, updateCatDto);
    console.log('Update Result : ');
    console.log(this.catsService.findAll());
    return `This action updates cat information of name ${name}`;
  }

  @Delete('delete/:name')
  Delete(@Param('name') name: string) {
    this.catsService.delete(name);
    console.log('Delete Result : ');
    console.log(this.catsService.findAll());
    return `This action deletes cat with name ${name}`;
  }
}
