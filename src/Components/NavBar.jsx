import React, {useContext} from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import {store} from '../App'

const NavBar = () => {
  const [token, setToken]= useContext(store);

  return (
    <div className='Nav-Container'>
        <div><Link to={'/'}>Home</Link></div>
        {!token && 
        <div>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>SignUp</Link>
    </div>
        }
        
    </div>
  )
}

export default NavBar