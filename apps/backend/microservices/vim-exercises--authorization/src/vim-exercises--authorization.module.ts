import { Module } from '@nestjs/common';
import { VimExercisesAuthorizationController } from './vim-exercises--authorization.controller';
import { VimExercisesAuthorizationService } from './vim-exercises--authorization.service';

@Module({
  imports: [],
  controllers: [VimExercisesAuthorizationController],
  providers: [VimExercisesAuthorizationService],
})
export class VimExercisesAuthorizationModule {}
