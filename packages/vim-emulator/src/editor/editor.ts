import { Cursor } from './cursor'

export class Editor {
  constructor(
    private readonly cursor: Cursor,
    private readonly text: string,
  ) {}
}
