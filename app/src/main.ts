import { sdk } from './tracer';
sdk.start();
import { log } from './infra/logger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3001)
    .then(() => {
      log.info('Aplicação subiu!');
    })
    .catch(() => {
      log.error('Aplicação não subiu!');
    });
}
bootstrap();
