import { render, screen } from '@testing-library/react'

import { Card } from '../'

describe('<Card />', () => {
  it('should render the card', () => {
    render(<Card />)

    expect(screen.getByRole('heading', { name: /VIDEO/i })).toBeInTheDocument()
  })
})
