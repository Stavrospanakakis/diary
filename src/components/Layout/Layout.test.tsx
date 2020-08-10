import React from 'react'

import { render } from '@testing-library/react'

import Layout from './Layout'
import PostPreview from '../PostPreview/PostPreview'

describe('Layout', () => {
	it('should render', () => {
		const { container } = render(
			<Layout isSidebarVisible={false}>
				<PostPreview
					image='test_image.jpg'
					title='test title'
					description='test description'
					path='test path'
					tags={['these', 'are', 'test', 'tags']}
				/>
			</Layout>)
		expect(container).toMatchSnapshot()
	})
})