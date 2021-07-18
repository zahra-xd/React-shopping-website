import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './SectionUncoming.css';
function CardUncoming(props)
{
    return(
        <>
        <div className="col-lg-6 col-md-6">
            <div className="single_event position-relative">
                <div className="event_thumb">
                     <img src={props.src} alt="student"></img>
                </div>
                <div className="event_details">
                    <div className="d-flex mb-4">
                        <div className="date">
                          <span>{props.date}</span>
                            {props.month}
                        </div>
                        <div className="time-location">
                               
                            <p>
                                <i className="fa fa-clock"></i>
                                  {props.datehour}
                            </p>
                            <p>
                                    <i className="fa fa-map-marker-alt"></i>
                                    {props.location}
                                </p>
                               
                        </div>

                    </div>
                    <p>{props.text}</p>
                    <Link><button className="primary-btn rounded-0 mt-3">View Details</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default CardUncoming