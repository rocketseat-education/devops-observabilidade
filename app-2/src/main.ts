import { sdk } from './tracer';
sdk.start();
import { log } from './infra/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3002)
    .then(() => {
      log.info('Aplicação 2 subiu!');
    })
    .catch(() => {
      log.error('Aplicação 2 não subiu!');
    });
}
bootstrap();
