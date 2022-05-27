import React, { useState } from "react";
import SForm from "../../Style";

import { FaUserAlt, FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [iconEyes, setIconEyes] = useState(false);
  const [userData, setUserData] = useState(initialState);
 
  function inputChange(key, value) {
    return setUserData({
      ...userData,
      [key]: value,
    });
  }

  function handleButton() {
    console.log(userData.password.length);
  }

  return (
    <SForm>
      <h1>Login</h1>
      <FaUserAlt className="icon-user" />
      <input
        type="text"
        name="username"
        value={userData.username}
        placeholder="Username"
        onChange={({ target: { name, value } }) => inputChange(name, value)}
      />
      {
        iconEyes ? 
        <IoEyeSharp 
          className="icon-password"
          onClick={()=> setIconEyes(!iconEyes)}
        /> : <FaEyeSlash 
          className="icon-password"
          onClick={()=> setIconEyes(!iconEyes)}
        />      
      }
      <input
        type={!iconEyes ? "password" : "text"}
        name="password"
        value={userData.password}
        onChange={({ target: { name, value } }) => inputChange(name, value)}
        placeholder="Password"
      />
      <div>
        <button 
          onClick={handleButton}
          disabled={(userData.password.length < 8 || userData.username.length < 3)}
        >
          Enter
        </button>
        <p>Esqueceu a senha?</p>
      </div>
    </SForm>
  );
}

export default Login;
