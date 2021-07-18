import React from 'react';
import ReactDOM from 'react-dom';
import './About.css';
function About(props)
{
    return(
        <>
           <div className="container site-section">
               <div className="row mb-5">
                   <div className="col-lg-6 mb-lg-0 mb-4">
                       <img className="img-fluid" src={props.imag}></img>
                   </div>
                   <div className="col-lg-5 ml-auto align-self-center">
                      <h2 className="section-title-underline mb-5">
                          <span>{props.titel}</span>
                      </h2>
                      <p>{props.text}</p>
                      <p>{props.text2}</p>
                   </div>
               </div>
           </div>
        </>
    )
}
export default About