import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { MicroserviceOptions } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const port = Number(configService.get<string>('PORT'))
  const host = configService.get<string>('HOST')

  app.connectMicroservice<MicroserviceOptions>({
    options: {
      port,
      host,
    }
  })

  await app.listen(port, () => console.log(`Microservice is listening on port ${port}`))
}

bootstrap()

