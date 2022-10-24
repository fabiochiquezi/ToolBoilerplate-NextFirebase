import { render, screen } from '@testing-library/react'
import React, { ReactElement } from 'react'

const Hello = (): ReactElement => <h1>Hello World!</h1>

it('renders the page', () => {
    render(<Hello />)
    const Element = screen.getByText('Hello World!')
    expect(Element).toBeInTheDocument()
})
