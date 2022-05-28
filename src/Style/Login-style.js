import styled from 'styled-components';

const SForm = styled.form`
  position: relative;
  background-color: #fff;
  box-shadow: lightgray 1px 1px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50%;
  

  h1{
    letter-spacing: 3px;
    margin-bottom: 30px;
  }

  input {
    height: 5vh;
    width: 70%;
    border: none;
    font-size: 22px;
    box-shadow: lightgray -1px 2px 8px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    cursor: auto;
    font-family: "Nunito";
    padding-left: 35px;
  }

  .icon-user, .icon-password {
    position: absolute;
    font-size: 22px;
    top: 130px;
    left: 65px;
  }

  .icon-password {
    top: 190px;
  }

  div {
    width: 100%;
    margin-top: 5px;
    height: 60px;
    position: relative;

    button {
      border-radius: 5px;
      background-color: #fff9f4;
      width: 160px;
      height: 40px;
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 30%;

      :disabled {
        border: 1px solid;
        background-color: gray;
        color: white;
      }
    }

    
    p, .create-user {
      position: absolute;
      cursor: pointer;
      top: 80px;
      left: 15px;
      user-select: none;

      :hover{
        border-bottom-right-radius :5px ;
        border-bottom-left-radius: 5px;
        border-bottom: 1px solid red;
      }
    }
    .create-user {
      top: 50px;
    }
  }

  .icon-question {
    position: absolute;
    font-size: 28px;
    right: 20px;
    top: 15px;
    transition: .2s ease-in-out;

    :hover {
      transform: scale(.8);
    }
  }
`;

export default SForm;