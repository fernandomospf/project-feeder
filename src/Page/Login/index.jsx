import React, { useContext } from 'react';
import Context from '../../Context/Login'
import SForm from '../../Style';

import { FaUserAlt, FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';



function Login() {

  const { 
    username, 
    setUsename, 
    token, 
    setToken } = useContext(Context);
  console.log(username)

  function handleButton(event) {
    event.preventDefault();
    console.log(event)
  }

  return (
    <SForm>
      <h1>Login</h1>
      <FaUserAlt className='icon-user'/>
      <input type="email" name="" id="" placeholder='Username...' />
      <FaEyeSlash className='icon-password'/>
      <input type="password" name="" id="" placeholder='Password' />
      <div>
        <button onClick={handleButton}>Enter</button>
        <p>Esqueceu a senha?</p>
      </div>
    </SForm>
  )
}

export default Login
