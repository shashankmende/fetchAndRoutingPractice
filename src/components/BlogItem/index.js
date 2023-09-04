// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blog} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blog

  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <div className="bg-container">
        <div className="blogs-container">
          <img src={imageUrl} alt={topic} className="topic-image" />
          <div className="blog-details">
            <p>{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={title} className="author-image" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
