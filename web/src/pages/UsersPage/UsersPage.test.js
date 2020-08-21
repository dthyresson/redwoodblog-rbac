import { render } from '@redwoodjs/testing'

import UsersPage from './UsersPage'

describe('UsersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UsersPage />)
    }).not.toThrow()
  })
})
