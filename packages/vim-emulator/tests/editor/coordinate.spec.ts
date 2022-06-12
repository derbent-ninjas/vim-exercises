import { Coordinate } from '../../src/editor/coordinate'
import { COORDINATE_MUST_BE_INTEGER } from '../../src/shared/errors'

describe('Coordinate', () => {
  describe('constructor', () => {
    test('when passed (1, 1) - should be created without errors', () => {
      expect(() => new Coordinate(1, 1)).not.toThrow()
    })

    const throwsTestCases = [
      // coordinate have integer values
      {
        toString: () => 'when passed (0.5, 1) - should throw an error, x must be integer',
        x: 0.5,
        y: 1,
        errorMessage: COORDINATE_MUST_BE_INTEGER
      },
      {
        toString: () => 'when passed (1, 0.5) - should throw an error, y must be integer',
        x: 1,
        y: 0.5,
        errorMessage: COORDINATE_MUST_BE_INTEGER
      },
    ]

    test.each(throwsTestCases)('%s', ({ x, y, errorMessage }) => {
      expect(() => new Coordinate(x, y)).toThrow(errorMessage)
    })

    const notThrowsCases = [
      // negative coordinates should be allowed
      {
        toString: () => 'when passed (0, 1) - should throw an error, x must be positive',
        x: 0,
        y: 1,
      },
      {
        toString: () => 'when passed (-1, 1) - should throw an error, x must be positive',
        x: -1,
        y: 1,
      },
      {
        toString: () => 'when passed (1, 0) - should throw an error, y must be positive',
        x: 1,
        y: 0,
      },
      {
        toString: () => 'when passed (1, -1) - should throw an error, y must be positive',
        x: 1,
        y: -1,
      },
    ]

    test.each(notThrowsCases)('%s', ({ x, y }) => {
      expect(() => new Coordinate(x, y)).not.toThrow()
    })
  })
})
