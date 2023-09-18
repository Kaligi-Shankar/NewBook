import axios from 'axios';
import React, { useContext, useState } from 'react';
import {store} from '../App';
import {redirect} from 'react-router-dom'
import { Navigate } from 'react-router-dom';

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
    axios.post('http://localhost:8000/login', formData)
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
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} autoComplete='off'>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
