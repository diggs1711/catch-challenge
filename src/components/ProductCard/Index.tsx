import React from 'react'
import Card from '../Card/Index'
import Tag from '../Tag/Index'

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

const ProductCard: React.FC<ProductCardProps> = ({ details }) => {
  const { imageUrl, name, retailPrice, salePrice, quantityAvailable } = details

  return (
    <div>
      <Card image={imageUrl}>
        {quantityAvailable == 0 ? <Tag title="Sold out" /> : null}
        <h6>{name}</h6>
        {retailPrice > 0 ? <div><s>{retailPrice}</s></div> : null}
        <div>{salePrice}</div>
      </Card>
    </div>
  )
}

export default ProductCard
