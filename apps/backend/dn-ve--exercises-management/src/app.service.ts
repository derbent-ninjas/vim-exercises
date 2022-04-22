import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getCat(): Promise<string> {
    return 'The cat';
  }
}
