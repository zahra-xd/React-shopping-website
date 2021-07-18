import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './Button.css';
function Button (props)
{

    return(
        <>
             <button  className="btn-sing ml-2" >
             <span>{props.titel}</span>
             </button>
        </>
    )
}
export default Button