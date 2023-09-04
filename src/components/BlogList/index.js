// Write your JS code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogDetails()
  }

  getBlogDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      topic: each.topic,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
    }))

    this.setState({
      blogsData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BBFF" height={50} width={50} />{' '}
          </div>
        ) : (
          blogsData.map(each => <BlogItem blog={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
