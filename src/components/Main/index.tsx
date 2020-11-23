import { Caroussel } from '../'

const categories = [
  {
    name: 'Filmes',
    id: 1
  },
  {
    name: 'Musicas',
    id: 10
  },
  {
    name: 'Jogos',
    id: 20
  }
]

const Main = () => (
  <main className="main">
    <h2>Aproveite a plataforma de vídeos Storm Play Grátis</h2>
    {categories.map((category, index) => (
      <Caroussel key={index} {...category} />
    ))}
  </main>
)

export default Main
