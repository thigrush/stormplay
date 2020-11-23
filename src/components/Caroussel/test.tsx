import { render, screen } from '@testing-library/react'

import { Caroussel } from '../'

describe('<Caroussel />', () => {
  it('should render the caroussel', () => {
    render(<Caroussel {...{ name: 'Filmes', id: 1 }} />)

    expect(screen.getByRole('heading', { name: /Filmes/i })).toBeInTheDocument()
  })
})
