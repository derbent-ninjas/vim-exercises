import { Cursor } from '../../src/editor/cursor'
import { Coordinate } from '../../src/editor/coordinate'

describe('Cursor', () => {
  describe('constructor', () => {
    test('when passed coordinate - should be created', () => {
      expect(() => new Cursor(new Coordinate(1, 1)))
    })
  })

  describe('verticalPosition', () => {
    const testCases = [
      {
        toString: () => 'start=1, passed=3 - should return vertical position 3',
        startVerticaPosition: 1,
        passedValue: 3,
        expectedVerticalPosition: 3,
      },
      {
        toString: () => 'start=1, passed=1 - should return vertical position 1',
        startVerticaPosition: 1,
        passedValue: 1,
        expectedVerticalPosition: 1,
      },
    ]

    test.each(testCases)('%s', ({
      startVerticaPosition,
      passedValue,
      expectedVerticalPosition
    }) => {
      const cursor = new Cursor(new Coordinate(1, startVerticaPosition))
      cursor.verticalPosition = passedValue

      expect(cursor.verticalPosition).toStrictEqual(expectedVerticalPosition)
    })
  })

  describe('horizontalPosition', () => {
    const testCases = [
      {
        toString: () => 'start=1, passed=3 - should return horizontal position 3',
        startHorizontalPosition: 1,
        passedValue: 3,
        expectedHorizontalPosition: 3,
      },
      {
        toString: () => 'start=1, passed=1 - should return horizontal position 1',
        startHorizontalPosition: 1,
        passedValue: 1,
        expectedHorizontalPosition: 1,
      },
    ]

    test.each(testCases)('%s', ({
      startHorizontalPosition,
      passedValue,
      expectedHorizontalPosition,
    }) => {
      const cursor = new Cursor(new Coordinate(1, startHorizontalPosition))
      cursor.horizontalPosition = passedValue

      expect(cursor.horizontalPosition).toStrictEqual(expectedHorizontalPosition)
    })
  })
})
