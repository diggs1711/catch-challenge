import React from 'react'
import { render, screen } from "@testing-library/react"
import DropdownSelect from './Index'
import userEvent from '@testing-library/user-event'

describe('Dropdown Select', () => {
    const options = [
        {name: 'High', id: '1'},
        {name: 'Low', id: '2'}
    ]

    it("renders", () => {
        render(<DropdownSelect onChange={() => { }} options={options} value={'High'}/>)

        expect(screen.getByRole('combobox')).toBeInTheDocument()
        expect(screen.getByText(/High/)).toBeInTheDocument()
        expect(screen.getByText(/Low/)).toBeInTheDocument()
    })

    it("calls callback function when dropdown value is changed", () => {
        const onChange = jest.fn()

        render(<DropdownSelect onChange={() => onChange()} options={options} value={"High"}/>)
        userEvent.selectOptions(screen.getByRole('combobox'), ['Low'], { bubble: true })

        expect(onChange).toHaveBeenCalledTimes(1)
        // expect(screen.getByText("Low").selected).toBe(true)
    })
})
