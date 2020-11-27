import { cleanup, render, screen } from '@testing-library/react'

import { Caroussel } from '../'

describe('<Caroussel />', () => {
  it('should render the caroussel', async () => {
    render(<Caroussel category={{ name: 'Esportes', id: '17' }} />)

    expect(
      await screen.getByRole('heading', { name: /Esportes/i })
    ).toBeInTheDocument()

    cleanup()
  })
})
