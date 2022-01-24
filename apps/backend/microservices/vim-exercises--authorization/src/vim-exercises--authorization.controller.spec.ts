import { Test, TestingModule } from '@nestjs/testing';
import { VimExercisesAuthorizationController } from './vim-exercises--authorization.controller';
import { VimExercisesAuthorizationService } from './vim-exercises--authorization.service';

describe('VimExercisesAuthorizationController', () => {
  let vimExercisesAuthorizationController: VimExercisesAuthorizationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VimExercisesAuthorizationController],
      providers: [VimExercisesAuthorizationService],
    }).compile();

    vimExercisesAuthorizationController = app.get<VimExercisesAuthorizationController>(VimExercisesAuthorizationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vimExercisesAuthorizationController.getHello()).toBe('Hello World!');
    });
  });
});
