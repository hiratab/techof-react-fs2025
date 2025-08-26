import { useParams } from 'react-router-dom'

import BasePage from '../components/BasePage'
import PostDetail from '../components/PostDetail'
import usePosts from '../hooks/usePosts'

const PostDetailPage = () => {
  const params = useParams()
  const [posts, setPosts, isLoading] = usePosts()

  return (
    <BasePage title="Post Detail Page">
      {isLoading && <p>Loading...</p>}
      {!isLoading && posts
        .filter((_post) => Number(_post.id) === Number(params.id))
        .map(_post => <PostDetail {..._post} />)
      }
    </BasePage>
  )
}

export default PostDetailPage