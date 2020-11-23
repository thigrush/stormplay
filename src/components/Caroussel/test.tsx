import { render, screen } from '@testing-library/react'

import { Caroussel } from '../'

describe('<Caroussel />', () => {
  it('should render the caroussel', () => {
    render(<Caroussel {...{ name: 'Esportes', id: 17 }} />)

    expect(
      screen.getByRole('heading', { name: /Esportes/i })
    ).toBeInTheDocument()
  })
})
