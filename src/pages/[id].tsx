import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Header, Footer, Video } from '../components'
import { activeControl, startControl } from '../services/controller.service'

const VideoPage = () => {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    startControl('.video__button')
    window.addEventListener('keydown', activeControl)
    return () => window.removeEventListener('keydown', activeControl)
  }, [])

  return (
    <>
      <Header />
      <Video id={id} />
      <Footer />
    </>
  )
}

export default VideoPage
