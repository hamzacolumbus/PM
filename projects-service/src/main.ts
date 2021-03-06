import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(9100);
  app.enableCors()
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
}
bootstrap()
