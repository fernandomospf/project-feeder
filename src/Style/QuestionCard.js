import styled from 'styled-components';

const QuestionCard = styled.div`
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
  padding: 15px;
  margin-top: 50%;

  .icon-close {
    position: absolute;
    font-size: 22px;
    top: 10px;
    right: 10px;
  }

  article {
    
    overflow-y: auto;
    line-height: 25px;
    width: 80%;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default QuestionCard;