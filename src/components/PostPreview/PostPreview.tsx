import React from 'react'
import { Link } from 'gatsby'

interface IPostPreviewProps {
    title: string
    description: string
    date: string
    path: string
}

const PostPreview: React.FC<IPostPreviewProps> = props => {
    const { title, description, date, path } = props
    return (
        <div className="post">
            <h3 className="post__title">{ title }</h3>
            <p className="post__description">{ description }</p>
            <p className="post__date">{ date }</p>
            <Link to={ path }>Read more</Link>
        </div>
    )
}

export default PostPreview