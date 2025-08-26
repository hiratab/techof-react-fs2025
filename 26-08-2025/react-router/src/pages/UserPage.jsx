import { useParams } from 'react-router-dom'

import BasePage from '../components/BasePage'

const UserPage = () => {
  const params = useParams()

  return (
    <BasePage>
      <h1>User Page</h1>
      <p>This is the user {params.userId} page</p>
    </BasePage>
  )
}

export default UserPage