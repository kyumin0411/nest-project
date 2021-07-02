import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(name: string): Cat {
    return this.cats.find((elem) => elem.name === name);
  }

  update(name: string, cat: Cat) {
    this.cats = this.cats.map((value) => {
      if (value.name === name) {
        return cat;
      }
      return value;
    });
  }

  delete(name: string) {
    this.cats = this.cats.filter((value) =>
      value.name === name ? false : true,
    );
  }
}
