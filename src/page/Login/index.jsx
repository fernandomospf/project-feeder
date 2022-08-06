import React, { useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { GiPadlock, GiPadlockOpen } from 'react-icons/gi';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { LoginUser } from '../../style/LoginUser';
import { randomImageUser } from '../../utils/randomImage';

export default function Login() {

  useEffect( () => {
    randomImageUser()
  }, [])
  return (
    <LoginUser>
      <h1 className="login__mainTitle">Feeder</h1>
      <h2 className="login__subTitle">Project</h2>

      <img
        alt="Ilustação de um usuário que pode ser uma mulher ou um homem"
        className="login__imagem-user"
        src={randomImageUser()}
      />
      <form className="login__form-user">
        <div className="login__container-input">
          <Input placeholder="Email or User" />
          <Input placeholder="Password" type="password" />
        </div>
      </form>

      <Button className="login__button-signIn" onClick={randomImageUser}>
        Sign in
      </Button>
    </LoginUser>
  );
}
