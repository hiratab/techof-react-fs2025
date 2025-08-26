import NavbarLink from './NavbarLink'

function Navbar() {
  return (
    <nav>
      <NavbarLink to="/" text="Home" />
      <NavbarLink to="/about" text="About" />
      <NavbarLink to="/user" text="User" />
      <NavbarLink to="/posts" text="Posts" />
    </nav>
  )
}

export default Navbar