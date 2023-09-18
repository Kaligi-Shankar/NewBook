import './App.css';
import React, {createContext} from 'react';
import {  Route,Routes } from 'react-router-dom';
import Login from './Components/LoginForm';
import SignUpForm from './Components/SignupForm';
import Home from './Components/Home';
import Myprofile from './Components/Myprofile';

const NavBar = React.lazy(()=>import('./Components/NavBar'))

export const store = createContext();

function App() {
  const [token, setToken] = React.useState(null);
  return (
    <store.Provider value={[token, setToken]}>
    <div className="App">
      <React.Suspense fallback={<p>Loading..</p>}>
      <NavBar/>
      </React.Suspense>
      
    <div className='container'>
      <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUpForm/>} />
          <Route exact path="/myprofile" element={<Myprofile/>} />
        </Routes>
        </div>
    </div>
    </store.Provider>
  );
}

export default App;


