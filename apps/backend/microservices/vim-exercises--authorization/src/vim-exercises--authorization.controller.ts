import { Controller, Get } from '@nestjs/common';
import { VimExercisesAuthorizationService } from './vim-exercises--authorization.service';

@Controller()
export class VimExercisesAuthorizationController {
  constructor(private readonly vimExercisesAuthorizationService: VimExercisesAuthorizationService) {}

  @Get()
  getHello(): string {
    return this.vimExercisesAuthorizationService.getHello();
  }
}
