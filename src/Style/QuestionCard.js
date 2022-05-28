import styled from 'styled-components';

const QuestionCard = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: lightgray 1px 1px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  font-size: 22px;
  width: 400px;
  height: 350px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px;
  margin-top: 50%;

  .icon-close {
    position: absolute;
    font-size: 22px;
    top: 10px;
    right: 10px;
  }

  article {
    overflow-y: scroll;
    line-height: 25px;
    margin-top: 20px;
    width: 80%;
    text-align: left;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default QuestionCard;