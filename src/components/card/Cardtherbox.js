import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
 import '../card/Card.css';
 function Cardtherbox(props)
 {
     return(
         <>
           <div className="single_feature">
               <div>
                   <span><i className="fa fa-book"></i></span>
               </div>
               <div className="desc">
                   <h4>{props.titel}</h4>
                   <p>{props.description}</p>
               </div>
           </div>
         </>
     )
 }
 export default Cardtherbox;