import { useEffect } from 'react'
import { Caroussel } from '../'
import { startControl } from '../../services/controller.service'

export default function Main() {
  useEffect(() => {
    startControl('.card')
  }, [])

  const categories = [
    {
      name: 'Esportes',
      id: '17'
    },
    {
      name: 'Musicas',
      id: '10'
    },
    {
      name: 'Jogos',
      id: '20'
    }
  ]

  return (
    <main className="main">
      <h2>Aproveite a plataforma de vídeos Storm Play Grátis</h2>
      {categories.map((category, index) => (
        <Caroussel key={index} category={category} />
      ))}
    </main>
  )
}
