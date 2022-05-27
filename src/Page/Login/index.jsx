import React from 'react';
import SForm from '../../Style';

import { FaUserAlt, FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';



function Login() {
  return (
    <SForm>
      <h1>Login</h1>
      <FaUserAlt className='icon-user'/>
      <input type="email" name="" id="" placeholder='Username...' />
      <FaEyeSlash className='icon-password'/>
      <input type="password" name="" id="" placeholder='Password' />
      <div>
        <button>Enter</button>
        <p>Esqueceu a senha?</p>
      </div>
    </SForm>
  )
}

export default Login
