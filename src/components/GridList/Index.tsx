
import React from 'react'

type GridListProps = {
  items: JSX.Element[]
}
const GridList: React.FC<GridListProps> = ({ items }) => {

  if (!items || items.length == 0) return null

  return (
    <div>
      {items.map((item) => item)}
    </div>
  )
}

export default GridList
