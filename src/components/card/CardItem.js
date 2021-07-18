import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
 import '../card/Card.css';
function Caeditem(props)
{
    return (
        <>
          <li className="cards__item">
              <Link className='cards__item__link'>
                 <figure className="cards__item__pic-wrap" data-category={props.label}>
                     <img src={props.src}  alt='Travel Image' className="cards__itemm"></img>
                 </figure>
                 <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                 </div>
              </Link>
          </li>
        </>
    )
}
export default  Caeditem