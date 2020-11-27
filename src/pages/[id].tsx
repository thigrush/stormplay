import { useRouter } from 'next/router'
import { Header, Footer, Video } from '../components'

const VideoPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <Video id={id} />
      <Footer />
    </>
  )
}

export default VideoPage
