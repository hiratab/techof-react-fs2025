import Navbar from './Navbar'
import styles from '../styles/basePage.module.css'

function BasePage(props) {
  return (
    <>
      <Navbar />
      <div className={styles.basePage}>
        <h1
          className={styles.title}
        >
          {props.title}
        </h1>
        {props.children}
      </div>
      <Navbar />
    </>
  )
}

export default BasePage
