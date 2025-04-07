import sdk from './tracer';
sdk.start();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3001)
    .then(() => {
      console.log('Aplicação subiu!');
    })
    .catch(() => {
      console.error('Aplicação não subiu!');
  });
}
bootstrap();
