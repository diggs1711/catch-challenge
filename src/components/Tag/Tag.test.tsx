import React from 'react'
import { render,screen } from "@testing-library/react"
import Tag from "./Index"

describe('Tag', () => {
  it("renders title", () => {
    render(<Tag title={'test title'} />)
    expect(screen.getByText("test title")).toBeInTheDocument()
  })
})
