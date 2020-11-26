import { useState, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Card } from '../'
import { Category } from '../../types/category.type'
import { Cards } from '../../types/card.type'
import { fetchVideo } from '../../services/api.service'

export default function Caroussel({ category }: { category: Category }) {
  const [items, setItems] = useState<[Cards]>()

  useEffect(() => {
    fetchVideo(category.id).then((data) => setItems(data.items))
  }, [category.id])

  return (
    <div className="caroussel">
      <h3 className="caroussel__title">{category.name}</h3>
      <ScrollContainer className="scroll-container">
        <div className="caroussel__list">
          {items?.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  )
}
