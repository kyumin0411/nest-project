import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 8080;
  console.log('Example app is listening port ', PORT);
  // app.use(logger);
  await app.listen(PORT);
}
bootstrap();
