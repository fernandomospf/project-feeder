import React, { useState } from 'react'
import styled from 'styled-components';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Card } from '../../style/Card';

export default function CardProject() {

  const [drop, setDrop] = useState(true);

  return (
    <Card >
      <section className='container__feedback-header'>
        Titulo do projeto
        <section className='container__feedback'>
          <AiFillStar  className='card__icon-starFill'/>
          <AiFillStar  className='card__icon-starFill'/>
          <AiOutlineStar  className='card__icon-starOutline'/>
          <AiOutlineStar  className='card__icon-starOutline'/>
          <AiOutlineStar  className='card__icon-starOutline'/>
        </section>
        {
          drop ? 
          <MdOutlineKeyboardArrowDown 
            className='card__icon-arrowDown'
            onClick={ () => setDrop(!drop)}
          />
          : <MdOutlineKeyboardArrowUp  onClick={ () => setDrop(!drop)}/>
        }
      </section>

    </Card>
  )
}
