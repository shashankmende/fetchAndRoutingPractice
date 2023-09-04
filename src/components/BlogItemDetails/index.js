// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogsDetails: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log('id = ', id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log('data=', data)
    const updatedData = {
      content: data.content,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    console.log(updatedData)
    this.setState({
      blogsDetails: updatedData,
      isLoading: false,
    })
  }

  renderBlogItemDetails = () => {
    const {blogsDetails} = this.state
    const {title, content, topic, imageUrl} = blogsDetails
    return (
      <div className="blog-details">
        <h1 className="title">{title}</h1>
        <div className="blog-container">
          <p>{topic}</p>
          <img src={imageUrl} alt={title} className="topic-image" />
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    ) : (
      this.renderBlogItemDetails()
    )
  }
}

export default BlogItemDetails
