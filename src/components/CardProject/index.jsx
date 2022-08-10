import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { AiFillStar, AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import { BsFillTrash2Fill, BsPencilFill } from 'react-icons/bs';
import { Card } from '../../style/Card';

export default function CardProject() {
  const [drop, setDrop] = useState(true);

  return (
    <Card height={drop ? '5vh' : '40vh'}>
      <header className="container__feedback-header">
        <h3 className="contianer__feedback-title">Titulo do projeto</h3>
        <section className="container__feedback">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </section>
        {drop ? (
          <MdOutlineKeyboardArrowDown
            className="card__icon-arrowDown"
            onClick={() => setDrop(!drop)}
          />
        ) : (
          <MdOutlineKeyboardArrowUp
            className="card__icon-arrowDown"
            onClick={() => setDrop(!drop)}
          />
        )}
      </header>
      {!drop && (
        <main className="container__feedback-main">
          <img
            src="https://i.pinimg.com/originals/0a/4d/cb/0a4dcb92fa2d3c601b58d72720d6bec4.jpg"
            alt="test"
            className="main__image-project"
          />
          <label 
            className="main__link-label"
            htmlFor="main__link-project"
          >
            Link to project
            <a
              className="main__link-project"
              href="https://www.teste.com.br"
            >Click here <AiOutlineLink /></a>
          </label>
          <label 
            className="main__description-label"
            htmlFor="main__descripton-text"
          >
            Description Project
            <p className="main__descripton-text"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti ducimus repellendus, laboriosam sapiente excepturi fugiat totam atque reprehenderit, adipisci numquam culpa nihil dicta veritatis. Voluptatum perspiciatis quidem modi aliquid?</p>
          </label>
          <label
            className="main__stacks" 
            htmlFor=""
          >
            <p>Stacks</p>
            <ul>
              <li>React.JS</li>
              <li>SasS</li>
              <li>Jest</li>
              <li>Jest</li>
              <li>Jest</li>
              <li>Jest</li>
              <li>Jest</li>
            </ul>
          </label>
          <section className="main__icon-crud">
            <abbr title="Delete project">
              <BsFillTrash2Fill className='main__icon-crud-trash'/>
            </abbr>
            <abbr title="Edit project">
              <BsPencilFill className='main__icon-crud-edit' />
            </abbr>
          </section>
        </main>
      )}
    </Card>
  );
}
