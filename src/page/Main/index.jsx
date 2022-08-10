import React from 'react'
import Input from '../../components/Input'
import styled from 'styled-components';
import Button from '../../components/Button'
import { BsPlusLg } from 'react-icons/bs';
import CardProject from '../../components/CardProject';

const  Smain = styled.main`
  padding-top: 40px;
  height: 100vh;

  .main__input-search {
    border:  none;
    border-radius:  6px;
    background-color:  #f2f2f24e;
    color:  #ffb700;
    margin-top:  45px;
    margin-left: 11px;
    padding-left:  5px;
    width:  95vw;

    &::placeholder {
      color:  #f2f2f28a;
      letter-spacing: 3px;
      padding-left: 10px;
    }
  }

  .main__input-btnPlus {
    background-color: #f2f2f276;
    border:  none;
    color:  #ffd000;
    border-radius:  50%;
    font-size: 32px;
    font-weight: 600;
    transition: all .2s ease-in-out;
    height:  60px;
    width: 60px;

    &:active {
      transform:  scale( .8);
    }
  }

  .main__section-container   {
    display:  flex;
    align-items: center;
    flex-flow: column nowrap;
    justify-content: center;
    height:  80vh;

    p { 
      font-size:  34px;
      font-weight:  500;
      margin-bottom:  60px;
      text-align: center;
      span {
        color: #ffb800;
      }
    }
  }

  .main__section-containerCard {
    height:  75vh;
    padding:  10px;
  }
`;

export default function Main() {
  return (
      <Smain>
        <Input 
          className="main__input-search"
          placeholder="Search project"
        />
        {/* <section className="main__section-container">
          <p>
              How about inserting a<br/>
                <span>
                  new personal project
                </span>
              ?
          </p>
          <Button className="main__input-btnPlus">
            <BsPlusLg />
          </Button>
        </section> */}
        <section className='main__section-containerCard'>
          <CardProject />
        </section>
      </Smain>
  )
}
