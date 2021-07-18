import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../card/Card.css';
function CardTeam (props)
{
    return(
        <>
        <div className="thumb d-flex justify-content-sm-center">
            <img src={props.src} alt="our team" className="img-card-four"></img>
        </div>
        <div className="meta-text text-sm-center">
            <h4>{props.name}</h4>
            <p>{props.job}</p>
            <div className="mt-4">
                <p>{props.dec}</p>
            </div>
            <div className="align-items-center justify-content-center d-flex">
                <Link > < i class = 'fab fa-instagram icona  ' /> </Link> 
                <Link > < i class = 'fab fa-google icona   ' /> </Link> 
                <Link> < i className = "fab fa-twitter icona" > </i></Link >
                <Link > < i className = "fab fa-linkedin icona" > </i></Link >
            </div>
        </div>
        </>
    )
}
export default CardTeam