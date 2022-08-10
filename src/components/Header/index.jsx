import React from 'react';
import styled from 'styled-components';
import { IoExitOutline } from 'react-icons/io5';

const Sheader = styled.header`
  align-items: center;
  background-color:  #f2f2f247;
  font-family: 'Darker Grotesque', sans-serif;
  display: flex;
  height:  60px;
  justify-content: space-around;
  margin-bottom: 80px;
  position: absolute;
  padding: 5px;
  top: 0px;
  width:  100%;

  h2 {
    display: inline;
    text-align: center;
    width: fit-content;

    span{
      color: #ffb800;
    }
  }

  .header__icon-exit {
    color: #f1471f;
    font-size:  28px;
    margin-top:  2px;
    margin-left:  130px;
  }
`;

export default function Header() {
  return (
    <Sheader>
        <h2>Welcome, <span>$USER</span></h2>
        <IoExitOutline className='header__icon-exit'/>
    </Sheader>
  )
}
