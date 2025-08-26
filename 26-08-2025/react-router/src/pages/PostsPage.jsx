import { useState, useEffect } from 'react'

import BasePage from '../components/BasePage'
import Post from '../components/Post'
import usePosts from '../hooks/usePosts'

const PostsPage = () => {
  const [posts, setPosts, isLoading] = usePosts()

  return (
    <BasePage title="Posts Page">
      {isLoading && <p>Loading...</p>}
      {!isLoading && posts.map(post => <Post {...post} />)}
    </BasePage>
  )
}

export default PostsPage