import React, { ChangeEvent } from 'react'

type OptionProps = {
    name: string
    id: string
}

type DropdownSelectProps = {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
    value:string
    options: OptionProps[]
}

const DropdownSelect = ({ onChange, options, value }: DropdownSelectProps) => {

    return (
        <div>
            <select value={value} onChange={onChange} name='sort'>
                {options.map((option) => (<option key={option.id} value={option.name} >{option.name}</option>)) }
            </select>
        </div>
    )
}

export default DropdownSelect
