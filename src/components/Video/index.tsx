import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  AiFillPlayCircle,
  AiOutlineRollback,
  AiFillHeart
} from 'react-icons/ai'

import { fetchVideo } from '../../services/api.service'
import { Cards } from '../../types/card.type'

export default function Video({ id }: { id: string | string[] | undefined }) {
  const [infoVideo, setVideo] = useState<[Cards]>()

  useEffect(() => {
    fetchVideo(id, 'video').then((data) => setVideo(data.items))
  }, [id])

  const playActive = () => {
    const video_iframe = document.querySelector('iframe')
    if (video_iframe != null) {
      video_iframe.src += '?autoplay=1'
    }
  }

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
              {infoVideo?.[0].snippet.description.length > 400
                ? infoVideo?.[0].snippet.description.slice(0, 400) + '...'
                : infoVideo?.[0].snippet.description}
            </p>
          )}
          <div className="video__buttons">
            <button className="video__button" onClick={() => playActive()}>
              <AiFillPlayCircle />
              ASSISTIR
            </button>
            <button
              className="video__button"
              onClick={() => alert('Video adicionado aos favoritos')}
            >
              <AiFillHeart /> FAVORITAR
            </button>
          </div>
          <div className="video__buttons">
            <Link href="/">
              <button className="video__button">
                <AiOutlineRollback /> VOLTAR
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
