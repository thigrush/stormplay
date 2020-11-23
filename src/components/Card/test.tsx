import { render, screen } from '@testing-library/react'
import { fetchVideo } from '../../services/api.service'

import { Card } from '../'

describe('<Card />', () => {
  const videos = fetchVideo(20).then((data) => data.items)

  it('should render the card', async () => {
    render(<Card {...await videos} />)

    expect(screen.getAllByRole('heading', { level: 4 }).length > 10)
  })
})
