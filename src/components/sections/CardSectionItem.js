import React from 'react'
import { Link } from 'react-router-dom';

function CardSectionItem(params) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={params.path}>
          <figure className='cards__item__pic-wrap' data-category={params.label}>
            <img src={params.src} alt='Services' className='cards__item__img' />
          </figure>
          <div className='cards_item_info'>
            <h5 className='cards__item__text'>{params.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardSectionItem