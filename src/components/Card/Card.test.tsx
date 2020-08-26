import React from 'react'
import { render, screen } from "@testing-library/react"
import Card from './Index'

describe('Card', () => {
  it("renders image and children", () => {
    const testDetails = {
      "imageUrl": "product_image.jpg",
      'title': "Test title"
    }

    const { container } = render(<Card image={testDetails.imageUrl}>
      <h6>{testDetails.title}</h6>
    </Card>)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText(testDetails.title)).toBeInTheDocument()
  })

})
