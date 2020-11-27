import { useEffect } from 'react'
import { Header, Footer, Main } from '../components'
import { activeControl, startControl } from '../services/controller.service'

export default function Home() {
  useEffect(() => {
    startControl('.card')
    window.addEventListener('keydown', activeControl)
    return () => window.removeEventListener('keydown', activeControl)
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
