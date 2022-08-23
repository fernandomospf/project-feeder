import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  background-color: #f2f2f248;
  border-radius: 6px;
  color: #ffb800;
  display: flex;
  font-size: 26px;
  justify-content: space-between;
  height: ${(props) => props.height};
  margin: 0 auto;
  position: relative;
  padding: 10px;
  width: 94vw;
  transition: ease-in-out;
  transition-duration: 0.5s;

  .container__feedback-header {
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    top: 5px;
    width: 95%;

    .contianer__feedback-title {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 10px;
      margin-right: 30px;
    }

    .card__icon-arrowDown {
      position: absolute;
      font-size: 32px;
      right: 0px;
    }
  }

  .container__feedback-main {
    height: 30vh;
    padding: 10px;
    width: 100%;

    .main__image-project {
      background-size: contain;
      border-radius: 6px;
      height: 120px;
      width: 180px;
    }

    .main__link-label {
      position: absolute;
      display: flex;
      font-size: 18px;
      font-weight: 600;
      flex-flow: column nowrap;
      right: 0px;
      top: 55px;
      width: 46vw;
      text-align: center;

      .main__link-project {
        text-align: center;
        text-decoration: none;
        color: #f2f2f2;
        cursor: pointer;
      }
    }
    .main__description-label {
      font-size: 18px;
      font-weight: 600;
      position: absolute;
      top: 105px;
      text-align: center;
      width: 46vw;

      .main__descripton-text {
        color: #f2f2f2;
        font-weight: 400;
        overflow-y: scroll;
        height: 80px;
      }
    }
  }

  .main__stacks {
    font-size: 18px;
    font-weight: 600;
    position: absolute;
    bottom:  25px;
    left:  0px;
    width: fit-content;
    text-align: left;
    p {
      margin-left: 75px;
    }
    ul {
      border-radius: 6px;
      box-shadow:  0px 0px 0px .5px #F2F2F2;
      height: 15vh;
      width:  43vw;
      margin-left: 20px;
      overflow-y: scroll;
      li {
        list-style: none;
        color: #f2f2f2;
        text-align: justify;
        padding-left: 25px;
      }
    }
  }

  .main__icon-crud {
    display: flex;
    justify-content:  space-around;
    padding:  15px;
    position: absolute;
    right:  0px;
    bottom:  0px;
    width:  130px;

    .main__icon-crud-edit, .main__icon-crud-trash {
      transition:  all .2s ease-in-out;

      &:active {
        color: #f2f2f2;
        transform: scale(.8);
      }
    }
  }
`;
