import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`

`;

export default function Button(props) {
  return (
    <SButton {...props} type="button">
      {props.children}
    </SButton>
  );
}
