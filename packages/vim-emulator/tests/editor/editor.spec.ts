import { Editor } from '../../src/editor/editor'
import { Cursor } from '../../src/editor/cursor'
import { Coordinate } from '../../src/editor/coordinate'

describe('Editor', () => {
  describe('constructor', () => {
    test('When passed cursor and empty text - should be created successfully', () => {
      const cursorCoordinate = new Coordinate(1, 1)
      const cursor = new Cursor(cursorCoordinate)

      expect(() => new Editor(cursor, '')).not.toThrow()
    })
  })
})
