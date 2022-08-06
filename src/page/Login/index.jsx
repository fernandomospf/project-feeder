import React from 'react';
import styled from 'styled-components';
import femaleUser from '../../assets/userFemale.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const LoginUser = styled.div`
  color: #f2f2f2;
  font-size: 24px;
  text-align: center;
  position: relative;
  height: 100vh;
  width: 100%;

  .login__subTitle {
    color: #ffb800;
  }

  .login__form-user {
    background-color: #f2f2f276;
    border-radius: 0.37rem;
    position: absolute;

    .login__container-input {
      bottom: 0;
      display: flex;
      height: 60%;
      flex-flow: column nowrap;
      position: absolute;
      width: 100%;
      align-items: center;
    }
  }

  // Regras para mobile até 414px - iPhone
  @media screen and (max-width: 414px) {
    .login__imagem-user {
      top:  210px;
      left: 135px;
      position: absolute;
      width: 145px;
      z-index: 99;
    }
    .login__form-user {
      left: 3.1rem;
      height: 16rem;
      top: 18.25rem;
      width: 20rem;
    }
  }

  // Regras para monitores maiores que 1920px
  @media screen and (min-width: 1921px) {
    left: 50rem;
  }
`;

export default function Login() {
  return (
    <LoginUser>
      <h1 className="login__mainTitle">Feeder</h1>
      <h2 className="login__subTitle">Project</h2>

      <img
        alt="Ilustação de um usuário que pode ser uma mulher ou um homem"
        className="login__imagem-user"
        src={femaleUser}
      />
      <form className="login__form-user">
        <div className="login__container-input">
          <Input placeholder="Email or User" />
          <Input placeholder="Password" type="password" />
        </div>
      </form>

    <Button>Sign in</Button>
    </LoginUser>
  );
}
