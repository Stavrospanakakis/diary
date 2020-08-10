import React from 'react'

import { render } from '@testing-library/react'

import Layout from './Layout'

describe('Layout', () => {
	it('should render', () => {
		const { container } = render(<Layout />)
		expect(container).toMatchSnapshot()
	})
})