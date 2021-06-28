import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { clientInit } from './db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await clientInit();
  await app.listen(8989);
}

bootstrap().then(() => console.log('App listening on port 8989'));
