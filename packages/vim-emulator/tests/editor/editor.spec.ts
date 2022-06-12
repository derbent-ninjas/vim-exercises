import { Editor } from '../../src/editor/editor'
import { Cursor } from '../../src/editor/cursor'
import { Coordinate } from '../../src/editor/coordinate'

describe('Editor', () => {
  describe('constructor', () => {
    const notThrowsTestCases = [
      {
        toString: () => 'When passed cursor and empty text - should be created successfully',
        cursor: new Cursor(new Coordinate(1, 1)),
        text: '',
      },
    ]

    test.each(notThrowsTestCases)('%s', ({ cursor, text }) => {
      expect(() => new Editor(cursor, text)).not.toThrow()
    })

    const refinesCursorCoordinateForTextTestCases = [
      // vertical position > last line of text
      {
        toString: () => 'cursor=(x=1,y=2), empty text - should change cursor to (x=1, y=1)',
        startCoordinate: new Coordinate(1, 2),
        text: '',
        expectedCoordinate: new Coordinate(1, 1),
      },
      {
        toString: () => 'cursor=(x=1,y=3), one line - should change cursor to (x=1, y=2)',
        startCoordinate: new Coordinate(1, 3),
        text: 'line\n',
        expectedCoordinate: new Coordinate(1, 2),
      },
      {
        toString: () => 'cursor=(x=1,y=4), two lines - should change cursor to (x=1, y=3)',
        startCoordinate: new Coordinate(1, 4),
        text: 'line\nline\nline',
        expectedCoordinate: new Coordinate(1, 3),
      },
      // vertical position < 1(first line)
      {
        toString: () => 'cursor=(x=1,y=0), empty text - should change cursor to (x=1, y=1)',
        startCoordinate: new Coordinate(1, 0),
        text: '',
        expectedCoordinate: new Coordinate(1, 1),
      },
      {
        toString: () => 'cursor=(x=1,y=0), empty text - should change cursor to (x=1, y=1)',
        startCoordinate: new Coordinate(1, -1),
        text: '',
        expectedCoordinate: new Coordinate(1, 1),
      },
      {
        toString: () => 'cursor=(x=1,y=0), empty text - should change cursor to (x=1, y=1)',
        startCoordinate: new Coordinate(1, -2),
        text: '',
        expectedCoordinate: new Coordinate(1, 1),
      },
    ]

    test.each(refinesCursorCoordinateForTextTestCases)('%s', ({ startCoordinate, text, expectedCoordinate}) => {
      const editor = new Editor(new Cursor(startCoordinate), text)

      // @ts-ignore private properties
      expect({ ...editor.cursor.coordinate }).toStrictEqual({ ...expectedCoordinate })
    })
  })
})
