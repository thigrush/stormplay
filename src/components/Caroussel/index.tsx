import { Card } from '../'
import ScrollContainer from 'react-indiana-drag-scroll'

const Caroussel = () => (
  <div className="caroussel">
    <h3>Categoria</h3>
    <ScrollContainer className="scroll-container">
      <div className="caroussel__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ScrollContainer>
  </div>
)

export default Caroussel
