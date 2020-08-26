import React from 'react'

type TagProps = {
  title: string
}

const Tag: React.FC<TagProps> = ({title}) => {
  return (
    <div>
      {title}
    </div>
  )
}

export default Tag
