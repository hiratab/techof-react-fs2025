import User, { type UserType } from './User'

export interface UsersType {
  users: UserType[]
}

function Users(props: UsersType) {
  return (
    <>
      {props.users.map(user => <User key={user.id} {...user} />)}
    </>
  )
}

export default Users