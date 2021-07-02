import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule], // 이 module에서 필요한 provider를 내보내는 "module"
  controllers: [AppController], // instance화 되는 module에 정의된 controller
  providers: [AppService], // Nest injector에 의해 instance화 되고, 이 module에서 공유되는 provider
  exports: [], // 이 module에서 제공하고 이 module을 import하는 다른 module에서 사용할 수 있도록 하는 provider의 하위 집합
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(CatsController);
//   }
// }
