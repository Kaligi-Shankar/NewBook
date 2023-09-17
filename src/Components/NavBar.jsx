import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='Nav-Container'>
        <div><Link to={'/'}>Home</Link></div>
        <div>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>SignUp</Link>
        </div>
    </div>
  )
}

export default NavBar