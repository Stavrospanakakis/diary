import React from 'react'

import { render } from '@testing-library/react'

import PostPreview from './PostPreview'

describe('Navbar', () => {
	it('should render', () => {
		const { container } = render(
			<PostPreview
				image='test_image.jpg'
				title='test title'
				description='test description'
				path='test path'
				tags={['these', 'are', 'test', 'tags']}
			/>)
		expect(container).toMatchSnapshot()
	})
})

