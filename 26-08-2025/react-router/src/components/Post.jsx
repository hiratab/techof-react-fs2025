import { Link } from "react-router-dom"

function Post(props) {
  return (
    <div key={props.id}>
      <Link to={`/post/${props.id}`}>
        <h3>{props.title}</h3>
      </Link>
      <p>{props.title}</p>
    </div>
  )
}

export default Post