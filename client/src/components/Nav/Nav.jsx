import './Nav.css'
import { NavLink, useLocation } from 'react-router-dom'
import { SignOut } from '../../components'
import { useEffect } from 'react'

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-up">Sign Up</NavLink>
      <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/about">About</NavLink>
    <NavLink className="link" to="/products">Products</NavLink>
  </>
)

const Nav = ({ user }) => {
  let location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  return (
    <nav
      className={location.pathname === '/' ? 'nav-home' : 'nav' }>
      <NavLink className='logo' to='/'>EverFree Outdoors</NavLink>
      <div className='links'>
        {alwaysOptions}
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  )
}

export default Nav