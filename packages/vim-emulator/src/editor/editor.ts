import { Cursor } from './cursor'
import { lines } from '../shared/utils/lines'

interface FirstAndLastLinePositions {
  firstLine: number;
  lastLine: number;
}

interface FirstAndLastSymbolPositions {
  firstSymbol: number;
  lastSymbol: number;
}

export class Editor {
  private readonly _lines: string[];

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
    const { firstSymbol, lastSymbol } = this.getFirstAndLastSymbolPositions()
    const currentSymbol = this.cursor.horizontalPosition

    this.cursor.horizontalPosition =
      currentSymbol < firstSymbol ? firstSymbol :
      currentSymbol > lastSymbol ? lastSymbol :
      currentSymbol
  }

  private getFirstAndLastSymbolPositions(): FirstAndLastSymbolPositions {
    const firstSymbol = 1
    const lineLength = this.getCurrentLine().length
    const lastSymbol = lineLength < firstSymbol
      ? firstSymbol
      : lineLength

    return {
      firstSymbol,
      lastSymbol,
    }
  }

  private getCurrentLine(): string {
    return this._lines[this.cursor.verticalPosition - 1]
  }
}
