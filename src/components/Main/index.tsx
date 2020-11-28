import { Caroussel } from '../'

export default function Main() {
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
      <h2>Aproveite a melhor plataforma de vídeos grátis!</h2>
      {categories.map((category, index) => (
        <Caroussel key={index} category={category} />
      ))}
    </main>
  )
}
