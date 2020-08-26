import React from 'react'
import Products from './Index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Products Page', () => {

	const testDetails = [{
		"id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89222",
		"name": "Test Item 1",
		"salePrice": 1000,
		"retailPrice": 5000,
		"imageUrl": "product_image.jpg",
		"quantityAvailable": 100
	},
	{
		"id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89111",
		"name": "Test Item 2",
		"salePrice": 2000,
		"retailPrice": 5000,
		"imageUrl": "product_image.jpg",
		"quantityAvailable": 100
		},
		{
			"id": "ffc4211a-fb81-45e3-b1d8-2d399a92aa89333",
			"name": "Test Item 3",
			"salePrice": 3000,
			"retailPrice": 5000,
			"imageUrl": "product_image.jpg",
			"quantityAvailable": 100
		}]

	global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({results: testDetails}),
  })
	);

	test("fetches products and renders them", async () => {
		render(<Products />)

		const eles = await screen.findAllByText(/Test/)
		expect(eles.length).toBe(3)
		expect(global.fetch).toHaveBeenCalledTimes(1)
	})

	test("Product order changes to 'high to low'  when 'High' is selected", async () => {
		render(<Products />)
		await screen.findAllByText(/Test/)

		expect(screen.getByText('High').selected).toBe(true)
		expect(screen.getByText('Low').selected).toBe(false)

		const products = screen.queryAllByText(/Test Item/)

		const first = products[0]
		const last = products[products.length - 1]

		expect(first.innerHTML).toContain('Test Item 3')
		expect(last.innerHTML).toContain('Test Item 1')
	})


	test("Product order changes to 'low to high'  when 'Low' is selected", async () => {
		render(<Products />)
		await screen.findAllByText(/Test/)

		await userEvent.selectOptions(screen.getByRole('combobox'), ['Low'], { bubble: true })

		expect(screen.getByText('High').selected).toBe(false)
		expect(screen.getByText('Low').selected).toBe(true)

		const products = screen.queryAllByText(/Test Item/)

		const first = products[0]
		const last = products[products.length - 1]

		expect(first.innerHTML).toContain('Test Item 1')
		expect(last.innerHTML).toContain('Test Item 3')
	})
})
