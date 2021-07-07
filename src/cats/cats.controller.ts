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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Cats: cat 관리')
@ApiBearerAuth()
@Controller('cat')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  @ApiOperation({ summary: '전체 cat 조회' })
  async show() {
    return await this.catsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '새로운 cat 생성' })
  async create(@Body() createCatDto: CreateCatDto) {
    return await this.catsService.create(createCatDto);
  }

  @Delete('/:name')
  @ApiOperation({ summary: '특정 name의 cat 삭제 by Param' })
  @ApiParam({
    name: 'name of cat',
    type: 'string',
    description: '삭제할 cat의 name',
  })
  async deleteOne(@Param('name') name: string) {
    return await this.catsService.deleteOne(name);
  }

  @Delete()
  @ApiOperation({ summary: '특정 name의 cat 삭제 by Query' })
  @ApiQuery({
    name: 'name of cat',
    type: 'string',
    description: '삭제할 cat의 name',
  })
  async deleteOneByQuery(@Query('name') name: string) {
    return await this.catsService.deleteOne(name);
  }

  @Delete()
  @ApiOperation({ summary: '모든 cats 삭제' })
  async deleteAll() {
    console.log('Path is ok (delete)');
    return await this.catsService.deleteAll();
  }

  @Put('/:name')
  @ApiOperation({ summary: '특정 name의 cat 업데이트' })
  @ApiParam({
    name: 'name of cat',
    type: 'string',
    description: '업데이트할 cat의 name',
  })
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
  @ApiOperation({ summary: '특정 name의 cat 업데이트' })
  @ApiQuery({
    name: 'name of cat',
    type: 'string',
    description: '업데이트할 cat의 name',
  })
  async updateOneByQuery(
    @Query('name') name: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    console.log('updated by Query!');
    return await this.catsService.updateOne(name, updateCatDto);
  }
}
