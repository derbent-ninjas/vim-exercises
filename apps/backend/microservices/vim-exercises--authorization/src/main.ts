import { NestFactory } from '@nestjs/core';
import { VimExercisesAuthorizationModule } from './vim-exercises--authorization.module';

async function bootstrap() {
  const app = await NestFactory.create(VimExercisesAuthorizationModule);
  await app.listen(3000);
}
bootstrap();
