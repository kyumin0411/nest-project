import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodsModule } from './foods/foods.module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/db', {
      connectionName: 'cats',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/db', {
      connectionName: 'foods',
    }),
    FoodsModule,
  ], // 이 module에서 필요한 provider를 내보내는 "module"
  controllers: [AppController], // instance화 되는 module에 정의된 controller
  providers: [AppService], // Nest injector에 의해 instance화 되고, 이 module에서 공유되는 provider
  exports: [], // 이 module에서 제공하고 이 module을 import하는 다른 module에서 사용할 수 있도록 하는 provider의 하위 집합
})
export class AppModule {}
