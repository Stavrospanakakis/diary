import React from 'react'
import Helmet from 'react-helmet'

interface ISEO {
  title?: string
	description?: string
	image?: string
	path?: string
}
const SEO: React.FC<ISEO> = props => {
	const { title, description, image, path } = props
	return (
		<Helmet>
			<title>{title? ( title + ' | Diary of a Web Developer') : (' Diary of a Web Developer') }</title>
			<meta name='description' content={description} />
      
			<meta property='og:type' content='website' />
			<meta property='og:url' content='http://diary.stavrospanakakis.com/'/>
			<meta property='og:title' content={title? ( title + ' | Diary of a Web Developer') : (' Diary of a Web Developer') } />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={'https://diary.stavrospanakakis.com/' + image} />
			
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={'http://diary.stavrospanakakis.com/' + path}/>
			<meta property='twitter:title' content={title? ( title + ' | Diary of a Web Developer') : (' Diary of a Web Developer') } />
			<meta property='twitter:description' content={description} />
			<meta property='twitter:image' content={'https://diary.stavrospanakakis.com/' + image}/>
		</Helmet>
	)
}

export default SEO