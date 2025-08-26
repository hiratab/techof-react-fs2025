import { useState, useEffect } from 'react'

function usePosts() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = async () => {
    setIsLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setIsLoading(false)

    return data
  }
  useEffect(() => {
    fetchPosts()
      .then(_posts => setPosts(_posts))
      .catch(console.error)
  }, [])

  return [posts, setPosts, isLoading]
}

export default usePosts
