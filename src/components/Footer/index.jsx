import React from 'react';
import styled from 'styled-components';

const Sfooter = styled.footer`
  position: absolute;
  bottom:  0px;

 p {
  text-align: center;
  height:  50px;
  width:  100vw;
 }
`;

export default function Footer() {
  return (
    <Sfooter>
      <p>®Since  2022</p>
    </Sfooter>
  )
}
