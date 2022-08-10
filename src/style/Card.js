import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  background-color: #f2f2f248;
  border-radius: 6px;
  color: #ffb800;
  display: flex;
  font-size: 26px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
  width: 94vw;

  .container__feedback-header {
    display: flex;
  }

  .card__icon-arrowDown {
    font-size: 30px;
  }

  .container__feedback {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 30vw;

    .card__icon-star {
      font-size: 30px;
    }
  }
`;
