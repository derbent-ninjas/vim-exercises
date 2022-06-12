import { COORDINATE_MUST_BE_INTEGER } from '../shared/errors'
import { isNotInteger } from '../shared/utils/isNotInteger'

export class Coordinate {
  constructor(
    private _x: number,
    private _y: number,
  ) {
    this.assertCoordinateIsValid()
  }

  set x(x: number) {
    this._x = x
    this.assertCoordinateIsValid()
  }

  set y(y: number) {
    this._y = y
    this.assertCoordinateIsValid()
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  private assertCoordinateIsValid() {
    this.assertCoordinateIsLocatedAtIntegers()
  }

  private assertCoordinateIsLocatedAtIntegers() {
    if (isNotInteger(this._x) || isNotInteger(this._y)) {
      throw new Error(COORDINATE_MUST_BE_INTEGER)
    }
  }
}
