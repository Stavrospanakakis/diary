import React from 'react'
import { Layout } from '../components/index'
import { Link } from 'gatsby'

const NotFound: React.FC = () => {
	return (
		<Layout isSidebarVisible={false}>
			<h1 className='font-bold text-4xl flex justify-center mt-10'>Page not found</h1>
			<p className='flex justify-center'>The page you are looking for does not exist.</p>
			<Link className='flex justify-center text-purple-900'to='/'>Back to home ></Link>
		</Layout>
	)
}

export default NotFound