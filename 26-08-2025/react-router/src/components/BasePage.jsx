import Navbar from './Navbar'

function BasePage(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Navbar />
    </div>
  )
}

export default BasePage
