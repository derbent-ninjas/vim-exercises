import { INVALID_COORDINATE } from '../shared/errors'

export class Coordinate {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {
    this.assertCoordinateIsValid()
  }

  private assertCoordinateIsValid() {
    if (this.x <= 0 || this.y <= 0) {
      throw new Error(INVALID_COORDINATE)
    }
  }
}
