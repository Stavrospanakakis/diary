import React from 'react'

import { render } from '@testing-library/react'

import Banner from './Banner'

describe('BAnner', () => {
	it('should render', () => {
		const { container } = render(<Banner />)
		expect(container).toMatchSnapshot()
	})
})