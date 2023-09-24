import axios from 'axios';
import React, { useContext, useState } from 'react';
import {store} from '../App';
import './login.css'
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import config from '../config'
const baseurl = config.baseUrl


const LoginForm=()=> {
const [token, setToken]= useContext(store)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${baseurl}/login`, formData)
      .then((response) => {
        const data = response.data;
        setToken(data.token); // Store the token in state if needed
      })
      .catch((err) => {
        console.error(err); // Handle errors gracefully
      }); 
  };

  if(token){

    return  <Navigate to = "/myprofile"/>
  }

  return (
    <div>
      <div className='grid-container'>
      <div className='grid1'>
        <span>Sign in</span>
        <p> Use your account</p>
        <form onSubmit={handleSubmit} autoComplete='off'>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        <p>Forgot your password</p>
        <button type="submit">SIGN IN</button>
        </div>
      </form>
      </div>
      <div className='grid2'>
        <span>Hello, Friend!</span>
        <p>Enter your personal details and start journey with us</p>
        <Link to={'/signup'}><button>SIGN UP</button></Link>
      </div>
      </div>
    </div>
  );
}

export default LoginForm;
