import { Cards } from '../../types/card.type'

const Card = (card: Cards) => (
  <div
    className="card"
    style={{
      backgroundImage: `url(${card.snippet?.thumbnails?.high?.url})`
    }}
  >
    <a href="#" className="card__link">
      <h4 className="card__title">
        {card.snippet?.title.length > 20
          ? card.snippet?.title.slice(0, 20) + '...'
          : card.snippet?.title}
      </h4>
      <p className="card__description">
        {card.snippet?.description.length > 25
          ? card.snippet?.description.slice(0, 25) + '...'
          : card.snippet?.description}
      </p>
    </a>
  </div>
)

export default Card
