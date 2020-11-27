import { useRouter } from 'next/router'
import { Header, Footer } from '../components'

const Video = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <p>Video: {id}</p>
      <Footer />
    </>
  )
}

export default Video
