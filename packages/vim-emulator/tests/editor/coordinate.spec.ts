import { Coordinate } from '../../src/editor/coordinate'
import { INVALID_COORDINATE } from '../../src/shared/errors'

describe('Coordinate', () => {
  describe('constructor', () => {
    test('when passed (1, 1) - should be created without errors', () => {
      expect(() => new Coordinate(1, 1)).not.toThrow()
    })

    const throwsTestCases = [
      {
        toString: () => 'when passed (0, 1) - should throw an error',
        x: 0,
        y: 1,
      },
      {
        toString: () => 'when passed (1, 0) - should throw an error',
        x: 1,
        y: 0,
      },
    ]

    test.each(throwsTestCases)('%s', ({ x, y }) => {
      expect(() => new Coordinate(x, y)).toThrow(INVALID_COORDINATE)
    })
  })
})
