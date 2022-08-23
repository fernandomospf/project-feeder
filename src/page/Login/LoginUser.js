import styled from 'styled-components';

export const LoginUser = styled.div`
  align-items: center;
  flex-flow: column nowrap;
  display: flex;
  height: 100vh;
  position: relative;

  .login__icon-help {
    cursor: pointer;
    font-size: 1.75rem;
    fill: #ffb800;
    position: absolute;
    right: 1.87rem;
    top: 1.87rem;
  }

  .login__container-title {
    height: 20%;
    padding: 20px;
    text-align: center;

    .login__mainTitle, .login__subTitle {
      font-size: 3.87rem;
    }
    .login__mainTitle{
      color: #FFB800;
    }
  }

  .login__form-user {
    background-color: #F2F2F233;
    border-radius: 6px;
    margin-top: 8%;
    height: 250px;
    width: 400px;

    .login__imagem-user {
      left: 760px;
      position: absolute;
      top: 230px;
      user-select: none;
      width: 150px;
    }

    .login__container-input {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
      justify-content: center;

      input{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
        outline-color: #FFB800;
        color: #FFB800;
        font-size: 28px;
        width: 80%;
        padding-left: 40px;
      }
    }
  }

  .login__button-signIn {
    border-radius: 6px;
    color: #FFB800;
    display: flex;
    font-weight: 600;
    font-size: 42px;
    height: 70px;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    width: 400px;

    &:enabled{
      background-color: #FFB800;
      color: #141a29;
    }
  }

  .login__icon-user, .login__icon-password {
    color: #FFB800;
    font-size: 26px;
    left: 685px;
    position: absolute;
  }

  .login__icon-user {
    top: 400px;
  }

   .login__icon-password {
    cursor: pointer;
    top: 450px;
  }

  @media screen and (max-width: 425px){
    .login__icon-help {
      right: 20px;
      top: 20px;
      font-size: 28px;
    }
    
    .login__container-title {
      background-color: transparent;
      height: 20%;
      padding: 20px;
      text-align: center;

    .login__mainTitle, .login__subTitle {
      font-size: 3.87rem;
    }
    .login__mainTitle{
      color: #FFB800;
    }
  }
  
  .login__form-user {
    margin-top: 120px;
    height: 16rem;
    width: 20rem;

    .login__imagem-user {
      top:  25%;
      left: 30%;
      width: 145px;
    }
      .login__icon-user, .login__icon-password {
        position: absolute;
        left: 90px;
      }
    }
    .login__button-signIn {
      font-size: 26px;
      height: 50px;
      width: 19.8rem;
      position: absolute;
      bottom:  220px;
      left: 55px;
    }

  .login__icon-user {
    top: 385px;
  }

   .login__icon-password {
    top: 435px;
  }

  }

  @media screen and (min-width: 1920px){
    .login__form-user {
      .login__imagem-user {
        left: 1050px;
        top: 270px;
      }
    }

    .login__icon-user, .login__icon-password {
      left: 975px;
    }
    .login__icon-user {
      top: 440px;
    }

   .login__icon-password {
      top: 490px;
    }
  }
`;
