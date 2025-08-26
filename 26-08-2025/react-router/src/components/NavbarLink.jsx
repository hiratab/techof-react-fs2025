import { Link } from 'react-router-dom'

import styles from '../styles/navabar.module.css'

function NavbarLink(props) {
  return (
    <li>
      <Link
        className={styles.navbarLink}
        to={props.to}
      >
        {props.text}
      </Link>
    </li>
  )
}

export default NavbarLink