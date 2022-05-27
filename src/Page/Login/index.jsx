import React, { useState, useContext } from 'react';
import Context from '../../Context/Login'
import SForm from '../../Style';

import { FaUserAlt, FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';



function Login() {

  const initialState = {
    username: '',
    password: '',
  };

  
  const [userData, setUserData] = useState(initialState);

  function inputChange(key, value) {
    return setUserData({
      ...userData,
      [key]: value
    })
  }

  function handleButton() {
    console.log(userData)
  }

  return (
    <SForm>
      <h1>Login</h1>
      <FaUserAlt className='icon-user'/>
      <input 
        type="email" 
        name='username' 
        value={userData.username}
        placeholder='Username...'
        onChange={({target: {name, value}}) => inputChange(name, value)}
      />
      <FaEyeSlash className='icon-password'/>
      <input 
        type="password"
        name='password' 
        value={userData.password}
        onChange={({target: {name, value}}) => inputChange(name, value)}
        placeholder='Password' 
      />
      <div>
        <button onClick={handleButton}>Enter</button>
        <p>Esqueceu a senha?</p>
      </div>
    </SForm>
  )
}

export default Login
