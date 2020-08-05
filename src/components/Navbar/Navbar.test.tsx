import React from 'react'

import { render } from '@testing-library/react'

import Navbar from './Navbar'

describe('Sidebar', () => {
  it('should render', () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})