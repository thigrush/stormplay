import { render, screen } from '@testing-library/react'

import { Caroussel } from '../'

describe('<Caroussel />', () => {
  it('should render the caroussel', () => {
    render(<Caroussel />)

    expect(
      screen.getByRole('heading', { name: /Categoria/i })
    ).toBeInTheDocument()
  })
})
