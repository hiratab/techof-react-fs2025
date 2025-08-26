import { useState, useEffect } from 'react'

import BasePage from '../components/BasePage'
import Post from '../components/Post'

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return data
  }
  useEffect(() => {
    fetchPosts()
    .then(_posts => setPosts(_posts))
    .catch(console.error)
  }, [])

  return (
    <BasePage>
      <h1>Posts Page</h1>
      {!isLoading && posts.map(post => <Post {...post} />)}
    </BasePage>
  )
}

export default PostsPage