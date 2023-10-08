import axios from 'axios';
import React, { useState } from 'react';
import config from '../config';
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline'
const baseurl = config.baseUrl


const SignupForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      setMessage('password and confirm password should be the same')
    } else {
      try {
        const response = await axios.post(`${baseurl}/signup`, formData);
        if (response.status === 200) {
          setMessage(response.data);
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmpassword: ''
          });
        } else {
          setMessage(response.data);
        }
      }
      catch (err) {
        console.log('Error:', err)
        setMessage(err.response.data);
      }
    }


  };
  return (
    // <div>
    //   <h2>Signup Form</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="username">Full Name:</label>
    //       <input
    //         type="text"
    //         id="username"
    //         name="username"
    //         value={formData.username}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="confirmpassword">Confirm Password:</label>
    //       <input
    //         type="password"
    //         id="confirmpassword"
    //         name="confirmpassword"
    //         value={formData.confirmpassword}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Sign Up</button>
    //   </form>
    //   {message && <p>{message}</p>}
    // </div>
    <div>
      <div className='grid-container1'>
        <div className='grid2'>
          <span>Welcome Back !</span>
          <p>To keep connected with us please login with your personal info</p>
          <Link to={'/login'}><button>SIGN IN</button></Link>
        </div>
        <div className='grid1'>
          <span>Create Account</span>
          <div className='icon-grid'>
            <a href='https://www.facebook.com'><FacebookIcon  className='socialIcon'/></a>
            <a href='https://www.gmail.com'><MailOutlineIcon className='socialIcon' /></a>
            <a href='https://www.linkedin.com'><LinkedInIcon className='socialIcon' /></a>
          </div>
          <p> Use your email for registration</p>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder='Name'
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                required
              />
            </div>
            <div>
           <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            placeholder='Confirm Password'
            required
          />
        </div>
        {message && <p style={{color:"red",marginLeft:"-3vw"}}>{message}</p>}
            <div>
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
