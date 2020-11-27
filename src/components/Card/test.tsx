import { render, screen } from '@testing-library/react'
import { fetchVideo } from '../../services/api.service'
import { Card } from '../'

describe('<Card />', () => {
  it('should render the card', async () => {
    render(
      <Card
        card={await fetchVideo('20', 'search').then((data) => data.items[0])}
      />
    )

    expect(screen.getAllByRole('heading', { level: 4 }).length === 15)

    expect(
      screen.getByRole('heading', { name: /Biggest/i })
    ).toBeInTheDocument()
  })
})
