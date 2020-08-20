import { render } from '@redwoodjs/testing'

import BlogPostSummary from './BlogPostSummary'

describe('BlogPostSummary', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogPostSummary />)
    }).not.toThrow()
  })
})
