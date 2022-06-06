import { Cursor } from './cursor'
import { lines } from '../shared/utils/lines'

export class Editor {
  private _lines: string[];

  constructor(
    private readonly cursor: Cursor,
    private readonly text: string,
  ) {
    this._lines = lines(text)
    this.refineCursor()
  }

  private refineCursor(): void {
    this.refineVertical()
    this.refineHorizontal()
  }

  private refineVertical(): void {
    const lastLinePosition = this._lines.length

    if (this.cursor.verticalPosition > lastLinePosition) {
      this.cursor.verticalPosition = lastLinePosition
    }
  }

  private refineHorizontal(): void {

  }
}
