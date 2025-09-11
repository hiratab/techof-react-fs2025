export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
}

function User(props: UserType) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default User