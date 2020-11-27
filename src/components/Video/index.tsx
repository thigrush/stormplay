import { useState, useEffect } from 'react'
import { fetchVideo } from '../../services/api.service'

export default function Video({ id }: { id: string | string[] | undefined }) {
  const [infoVideo, setVideo] = useState()

  useEffect(() => {
    fetchVideo(id, 'video').then((data) => setVideo(data))
  }, [id])

  console.log(infoVideo)

  return (
    <main className="main">
      <h2>{id}</h2>
    </main>
  )
}
