import { Cursor } from '../../src/editor/cursor'
import { Coordinate } from '../../src/editor/coordinate'

describe('Cursor', () => {
  describe('constructor', () => {
    test('when passed coordinate - should be created', () => {
      expect(() => new Cursor(new Coordinate(1, 1)))
    })
  })
})
