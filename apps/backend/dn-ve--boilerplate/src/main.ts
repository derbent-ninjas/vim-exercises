/* eslint-disable functional/no-expression-statement,functional/functional-parameters,functional/no-return-void */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions } from '@nestjs/microservices';

// eslint-disable-next-line functional/functional-parameters
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = Number(configService.get<string>('PORT'));
  const host = configService.get<string>('HOST');

  app.connectMicroservice<MicroserviceOptions>({
    options: {
      port,
      host,
    }
  });

  await app.listen(port, () => console.log(`Microservice is listening on port ${port}`));
}

bootstrap();

