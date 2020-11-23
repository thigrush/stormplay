import { Card } from '../'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Category } from '../../types/category.type'

const Caroussel = (category: Category) => (
  <div className="caroussel">
    <h3 className="caroussel__title">{category.name}</h3>
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
