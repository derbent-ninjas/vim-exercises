import { Cursor } from './cursor'
import { lines } from '../shared/utils/lines'

interface FirstAndLastLinePositions {
  firstLine: number;
  lastLine: number;
}

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
    const { firstLine, lastLine } = this.getFirstAndLastLinesPositions()
    const currentLine = this.cursor.verticalPosition

    this.cursor.verticalPosition =
      currentLine > lastLine ? lastLine :
      currentLine < firstLine ? firstLine :
      currentLine
  }

  private getFirstAndLastLinesPositions(): FirstAndLastLinePositions {
    return {
      firstLine: 1,
      lastLine: this._lines.length
    }
  }

  private refineHorizontal(): void {

  }
}
