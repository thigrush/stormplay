import { useState, useEffect } from 'react'
import { fetchVideo } from '../../services/api.service'
import { Cards } from '../../types/card.type'

export default function Video({ id }: { id: string | string[] | undefined }) {
  const [infoVideo, setVideo] = useState<[Cards]>()

  useEffect(() => {
    fetchVideo(id, 'video').then((data) => setVideo(data.items))
  }, [id])

  return (
    <main className="main">
      <div className="video__container">
        <div className="video__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video__content">
          <h2>{infoVideo?.[0].snippet.title}</h2>
          {infoVideo && (
            <p>
              {infoVideo?.[0].snippet.description.length > 500
                ? infoVideo?.[0].snippet.description.slice(0, 500)
                : infoVideo?.[0].snippet.description}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
