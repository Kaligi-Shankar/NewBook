import axios from 'axios';
import React, { useState } from 'react';


const SignupForm=()=> {
const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmpassword){
      setMessage('password and confirm password should be the same')
    }else{
      try{
        const response = await axios.post('http://localhost:8000/signup', formData);
        console.log("response",response)
        if(response.status === 200){
          setMessage(response.data);
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
          });
        }else{
          setMessage(response.data);
        }
      }
      catch(err){
        console.log('Error:', err)
        setMessage(err.response.data);
      }
    }
   

  };
  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Full Name:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SignupForm;
