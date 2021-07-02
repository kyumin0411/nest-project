import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('App Service is done!');
    return 'Hello World!';
  }
}
