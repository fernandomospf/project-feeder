import styled from 'styled-components';

const SForm = styled.form`
  position: relative;
  background-color: #fff9f4;
  box-shadow: lightgray 1px 1px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50%;
  

  h1{
    letter-spacing: 3px;
  }

  input {
    width: 70%;
    border: none;
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
    top: 75px;
    left: 55px;
  }

  .icon-password {
    top: 120px;
  }

  div {
    width: 100%;
    margin-top: 5px;
    height: 60px;
    position: relative;

    button {
      border-radius: 5px;
      background-color: #fff9f4;
      width: 120px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-left: 30%;

      :disabled {
        border: 1px solid black;
        background-color: gray;
        color: white;
      }
    }

    p {
    position: absolute;
    top: 50px;
    left: 15px;
    }
  }
`;

export default SForm;