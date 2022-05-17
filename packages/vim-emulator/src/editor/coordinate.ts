import { INVALID_COORDINATE } from '../shared/errors'
import { isNotInteger } from '../shared/utils/isNotInteger'

export class Coordinate {
  constructor(
    private readonly x: number,
    private readonly y: number,
  ) {
    this.assertCoordinateIsValid()
  }

  private assertCoordinateIsValid() {
    this.assertCoordinateIsPositive()
    this.assertCoordinateIsLocatedAtIntegers()
  }

  private assertCoordinateIsPositive() {
    if (this.x <= 0 || this.y <= 0) {
      throw new Error(INVALID_COORDINATE)
    }
  }

  private assertCoordinateIsLocatedAtIntegers () {
    if (isNotInteger(this.x) || isNotInteger(this.y)) {
      throw new Error(INVALID_COORDINATE)
    }
  }
}
