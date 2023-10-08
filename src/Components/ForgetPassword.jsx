import React from 'react'
import './ForgetPassword.css'
const ForgetPassword = () => {
    const [formData, setFormData] = React.useState({
        email: '',
      });
    

const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

const handleSubmit=(e)=>{
    e.preventDefault();

}

  return (
    <div className='Reset-container'>
    <div className='grid1' style={{backgroundColor: "#FFFFFF", padding: "30px", marginTop: "130px", borderRadius: "4px"}}>
        <span>Reset Password</span>
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
        <div className='sign-button-section'>
        <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ForgetPassword