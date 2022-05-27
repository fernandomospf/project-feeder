import styled from "styled-components";

const SCreated = styled.form`
  align-items: flex-start;
  box-shadow: lightgray 1px 1px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  height: 80vh;
  margin-top: 30%;
  padding: 20px;
  width: 80%;

  input {
    width: 95%;
    border: none;
    box-shadow: lightgray -1px 2px 8px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    cursor: auto;
    font-family: "Nunito";
    padding-left: 5px;
  }

  button {
    border-radius: 5px;
    background-color: #fff9f4;
    width: 120px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2px;
 

    :disabled {
      border: 1px solid red;
      background-color: gray;
      color: white;
    }
  }

  .input-select {
    width: 95%;
    border: none;
    box-shadow: lightgray -1px 2px 8px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    cursor: auto;
    font-family: "Nunito";
    padding-left: 5px;
    background-color: white;
  }

  textarea{
    border: none;
    box-shadow: lightgray -1px 2px 8px;
    border-radius: 20px;
    padding: 10px;
    width: 95%;
    margin-bottom: 15px;
  }

  abbr {
    color: red;
    text-decoration: none;
    cursor: help;
  }

  span {
    font-size: 18px;
    font-weight: 900;
    color: red;
  }

  .input-gif {
    width: 90%;
    background-color: white;
    border: none;
    box-shadow: lightgray -1px 2px 8px;
    margin-bottom: 15px;
    border-radius: 5px;
    padding: 5px;
    user-select: none;
    cursor: auto;
    font-family: "Nunito";    
  }

  .container-button {
    display: flex;
    justify-content: space-around;
    width: 90%;

    button {
      width: 48%;
    }
  }
`;

export default SCreated;
