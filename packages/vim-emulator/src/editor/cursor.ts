import { Coordinate } from './coordinate'

export class Cursor {
  constructor(
    private readonly coordinate: Coordinate,
  ) {}

  set horizontalPosition(horizontalPosition: number) {
    this.coordinate.x = horizontalPosition
  }

  get horizontalPosition(): number {
    return this.coordinate.x
  }

  set verticalPosition(verticalPosition: number) {
    this.coordinate.y = verticalPosition
  }

  get verticalPosition(): number {
    return this.coordinate.y
  }
}
