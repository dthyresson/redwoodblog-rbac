import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import publishedDateFormatter from './publishedDateFormatter'

describe('publishedDateFormatter directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(publishedDateFormatter.schema).toBeTruthy()
    expect(getDirectiveName(publishedDateFormatter.schema)).toBe(
      'publishedDateFormatter'
    )
  })

  it('has a publishedDateFormatter implementation transforms the value', () => {
    const mockExecution = mockRedwoodDirective(publishedDateFormatter, {
      mockedResolvedValue: 'foo',
    })

    expect(mockExecution()).toBe('bar')
  })
})
