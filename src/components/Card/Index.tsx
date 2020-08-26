import React from 'react'

type CardProps = {
  image: string | undefined,
}

const Card: React.FC<CardProps> = ({image, children}) => {
  return (
    <div>
      {image ? <img src={image} alt={''}/> : null}
      <section>
        {children}
      </section>
    </div>
  )
}

export default Card
