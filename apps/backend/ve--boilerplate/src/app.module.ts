import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import config from './config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [config]
    })
  ],
})
export class AppModule {}
