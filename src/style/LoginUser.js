import styled from 'styled-components';

export const LoginUser = styled.div`
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

    .login__icon-help {
      position: absolute;
      right: 20px;
      top: 20px;
      font-size: 28px;
      fill: #ffb800;
    }

    .login__mainTitle, .login__subTitle {
      position: absolute;
      left: 140px;
    }
    .login__mainTitle {
      top: 90px;
    }

    .login__subTitle  {
      top: 140px;
      left: 150px;
    }

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

      .login__icon-user, .login__icon-password {
        position: absolute;
        left:  32px;
      }

      .login__icon-user {
        bottom:  120px;
      }

      .login__icon-password {
        bottom: 55px;
      }
    }

    .login__button-signIn {
      background-color: #f2f2f26d;
      border:  none;
      border-radius:  6px;
      color: #ffbf1c;
      cursor:  pointer;
      font-weight: 600;
      font-size:  28px;
      height: 50px;
      width: 20rem;
      position: absolute;
      bottom:  290px;
      left: 50px;

      &:disabled {
        border:  2px groove #D12004;
        background-color: #141A29;
        color: #D12004;
      }
    }

  }

  // Regras para monitores maiores que 1920px
  @media screen and (min-width: 1921px) {
    left: 50rem;
  }
`;
