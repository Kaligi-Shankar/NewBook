import React, {useContext} from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import {store} from '../App'

const NavBar = () => {
  const [token, setToken]= useContext(store);

  return (
    <div className='Nav-Container'>
        <div><Link to={'/'}><span>BLOOD BOOK</span></Link></div>
        {!token && 
        <div className="Nav-right">
        <Link to={'/login'}><span>Sign in</span></Link>
        <Link to={'/signup'}><span>SignUp</span></Link>
    </div>
        }
        
    </div>
  )
}

export default NavBar