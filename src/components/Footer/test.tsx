import { render, screen } from '@testing-library/react'

import { Footer } from '../'

describe('<Footer />', () => {
  it('should render the footer', () => {
    render(<Footer />)

    expect(
      screen.getByText(/Desenvolvido por Thiago Andrade/i)
    ).toBeInTheDocument()
  })
})
