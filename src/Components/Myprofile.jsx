import React, {useContext, useState, useEffect} from 'react'
import {store} from'../App';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const Myprofile = () => {
    const [token, setToken]= useContext(store)
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8000/myprofile', {
            headers: {
                'x-token': token,
            }
        })
        .then(res=>setUserData(res.data))
        .catch(err=>console.error(err))
    }, [])
    if(!token){
        return <Navigate to="/login"/>
    }
  return (<>
  { userData && <div>Welcome : {userData.username}</div>}
  <button onClick={()=>setToken(null)}>Logout</button>
  </>
    
    
  )
}

export default Myprofile