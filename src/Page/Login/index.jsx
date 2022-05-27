import React, { useState, useContext } from "react";
import {SForm} from "../../Style";
import { FaUserAlt, FaEyeSlash } from "react-icons/fa";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import Context from "../../Context/Login";
import QuestionModal from "../../Components";

function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [iconEyes, setIconEyes] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const myContext = useContext(Context);
  const { isModal, setIsModal} = myContext;

  function inputChange(key, value) {
    return setUserData({
      ...userData,
      [key]: value,
    });
  }

  function handleButton() {
    // console.log(userData.password.length);
  }
  
  return myContext.isModal ? (
    <QuestionModal />
  ) : (
    <SForm>
      <RiQuestionnaireFill 
        className="icon-question" 
        onClick={() => setIsModal(!isModal)}
      />
      <h1>Login</h1>
      <FaUserAlt className="icon-user" />
      <input
        type="text"
        name="username"
        value={userData.username}
        placeholder="Username"
        onChange={({ target: { name, value } }) => inputChange(name, value)}
      />
      {iconEyes ? (
        <IoEyeSharp
          className="icon-password"
          onClick={() => setIconEyes(!iconEyes)}
        />
      ) : (
        <FaEyeSlash
          className="icon-password"
          onClick={() => setIconEyes(!iconEyes)}
        />
      )}
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
          disabled={
            userData.password.length < 8 || userData.username.length < 3
          }
        >
          Enter
        </button>
        <p>Esqueceu a senha?</p>
      </div>
    </SForm>
  );
}

export default Login;
