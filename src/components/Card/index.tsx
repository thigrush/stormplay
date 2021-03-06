import Link from 'next/link'
import { Cards } from '../../types/card.type'

export default function Card({ card }: { card: Cards }) {
  return (
    <Link href={`/${card.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${card.snippet?.thumbnails?.high?.url})`
        }}
      >
        <div className="card__content">
          <h4 className="card__title">
            {card.snippet?.title.length > 22
              ? card.snippet?.title.slice(0, 22) + '...'
              : card.snippet?.title}
          </h4>
          <p className="card__description">
            {card.snippet?.description.length > 35
              ? card.snippet?.description.slice(0, 35) + '...'
              : card.snippet?.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
