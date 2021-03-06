import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link rel='icon' href={'favicon.png'} type='image/x-icon' />
				{props.headComponents}
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<div
					key={'body'}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}