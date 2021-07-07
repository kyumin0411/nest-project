import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from '../schemas/cat.schema';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<string> {
    await this.catModel.create(createCatDto);
    return '생성 성공';
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find();
  }

  async deleteOne(name: string) {
    await this.catModel.findOneAndDelete({ name: name });
    return '하나만 삭제 성공';
  }

  async deleteAll() {
    await this.catModel.deleteMany({});
    console.log('Delete .....!');
    return '전체 삭제 성공';
  }

  async updateOne(name: string, updateCatDto: UpdateCatDto) {
    await this.catModel.updateOne({ name: name }, updateCatDto);
    console.log('Updating....!');
    return '변경 성공';
  }
}
