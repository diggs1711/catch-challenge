import React from 'react'
import { render, screen } from "@testing-library/react"
import ProductCard from "../ProductCard/Index"
import GridList from './Index'

describe('CardList', () => {

  it("renders list of items", () => {
    const items = [
      {
        "id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
        "name": "Test Item 1",
        "salePrice": 3145,
        "retailPrice": 5000,
        "imageUrl": "product_image.jpg",
        "quantityAvailable": 65
      },
      {
        "id": "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
        "name": "Test Item 2",
        "salePrice": 1499,
        "retailPrice": 2500,
        "imageUrl": "product_image.jpg",
        "quantityAvailable": 71
      },
      {
        "id": "f56cb6f2-a926-4ff4-80be-4518b0d1997dTEST",
        "name": "Test Item 3",
        "salePrice": 1499,
        "retailPrice": 0,
        "imageUrl": "product_image.jpg",
        "quantityAvailable": 30
      }
    ]

    const ProductCards = items.map(item => <ProductCard key={item.id} details={item} />)
    render(<GridList items={ProductCards} />)
    expect(screen.queryAllByText(/Test Item/).length).toBe(3)
  })

  it("returns null if no items to render", () => {
    render(<GridList items={[]} />)
    expect(screen.queryAllByText(/Test/).length).toBe(0)
  })
})
