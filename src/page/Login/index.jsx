import React from 'react'
import styled from 'styled-components';

const LoginUser = styled.form`
  box-shadow:  0px 0px 2px #F2F2F2;
  border-radius:  .37rem;
  position: absolute;
  height: 80vh;
  width: 60vh;
  position: absolute;
  top:  6.25rem;
  left:  34.37rem;

  // Regras para mobile até 414px - iPhone
  @media screen and (max-width: 414px) {
    
  }

  // Regras para monitores maiores que 1920px
  @media screen and (min-width: 1921px) {
    left:  50rem;
  }
`;

export default function Login() {
  return (
    <LoginUser>
      Login
    </LoginUser>
  )
}
