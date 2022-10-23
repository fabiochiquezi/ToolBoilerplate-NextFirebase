import { render, screen } from '@testing-library/react'
import React from 'react'

const Hello = () => <h1>Hello World!</h1>

it('renders the page', () => {
    render(<Hello />)
    const Element = screen.getByText('Hello World!')
    expect(Element).toBeInTheDocument()
})
