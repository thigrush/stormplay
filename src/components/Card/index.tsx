import { Cards } from '../../types/card.type'

const Card = (card: Cards) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(${card.snippet?.thumbnails?.high?.url})`
    }}
  >
    <a href="#" className="card__link">
      <h3 className="card__title">VIDEO</h3>
      <p className="card__description">DESCRIPTION</p>
    </a>
  </div>
)

export default Card
