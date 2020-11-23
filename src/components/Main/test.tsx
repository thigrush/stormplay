import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the main', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /Aproveite a plataforma de vídeos Storm Play Grátis/i
      })
    ).toBeInTheDocument()
  })
})
