import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  font-size:  18px;
  padding: 5px;

  @media screen and (max-width:  414px) {
      border: none;
      background-color:  transparent;
      border-bottom: 2px groove #ffffff ; 
      margin-bottom:  15px;
      font-size:  26px;
      font-weight:  600;
      padding-left:  1.8rem;
      color:  #141a29;
      width:  80%;
      outline: none;

      &::placeholder {
        color: #141a29b5;
      }
  }
`;

export default function Input(props) {
  return (
    <SInput 
      type="text"  {...props}
    />
  )
}
