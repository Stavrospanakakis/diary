module.exports = {
	siteMetadata: {
		title: 'Diary of a Web Developer',
		description: 'Writing my personal thoughts and experiances about Web Development',
		author: '@stavepan',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		'gatsby-transformer-json',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/posts`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
}
