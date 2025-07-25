function Welcome(props) {
  console.log('Welcome props', props)
  return (
    <h1>Hello, {props.name}.</h1>
  )
}

export default Welcome;
