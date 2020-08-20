import { render } from '@redwoodjs/testing'

import StackedLayout from './StackedLayout'

describe('StackedLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StackedLayout />)
    }).not.toThrow()
  })
})
