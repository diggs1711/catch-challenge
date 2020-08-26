import React from 'react'
import Card from '../Card/Index'
import Tag from '../Tag/Index'
import styles from './ProductCard.module.css'
import centsToDollarConverter, { displayCentsAsDollars } from '../../utils/centsToDollarConverters/centsToDollarConverter'

export type ProductDetails = {
  name: string
  id: string
  salePrice: number
  retailPrice: number
  quantityAvailable: number
  imageUrl: string
}

type ProductCardProps = {
  details: ProductDetails
}

type TextSize = 'small' | 'large'

const ProductCardInfo = ({ text, size = 'small' }: { text: string, size?: TextSize }) => {
  return <div style={{
    fontSize: size === 'small' ? '16px' : '24px',
    fontWeight: size === 'small' ? 'normal' : 'bold'
  }}>
    {text}
  </div>
}

const ProductCard: React.FC<ProductCardProps> = ({ details }) => {
  const { imageUrl, name, retailPrice, salePrice, quantityAvailable } = details

  return (
    <Card image={{ url: imageUrl, alt: name }}>
        {quantityAvailable === 0 ? <Tag title="Sold out" /> : null}
      <div className={styles.product_card__body}>
        <div>
          <h6>{name}</h6>
          {retailPrice > 0 ? <div><s>{displayCentsAsDollars(retailPrice)}</s></div> : null}
          <ProductCardInfo text={displayCentsAsDollars(salePrice)}  size='large'/>
        </div>
      </div>
      </Card>
  )
}

export default ProductCard
