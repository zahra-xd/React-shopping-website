import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../form/Form.css';
import {Redirect} from 'react-router-dom'
function Login ()
{
    const [username ,setusername]=useState("");
    const[password ,setpassword]=useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
   const [loggin, setloggin] = useState(false)
   
    const handleSubmit = (event) => {
        console.log(`
          Passwords: ${password}
          Name:${username}
          Accepted Terms: ${acceptedTerms}
        `);
        event.preventDefault();
       if(username==="A"&& password==="B")
       {
         localStorage.setItem("token","hhdshh")
         setloggin({
          loggin:true
        })
       }
      }
 
               {   if (loggin)
                   return <Redirect to="/"></Redirect>
                }
    return(
        <>
        <div className="">
        <form  className=" form-login" onSubmit={handleSubmit} >
            <h3 className="text-login">Login</h3>
            <label className="label-form">:name
            <input className="input-sub" value={username} type="text" onChange={e=>setusername (e.target.value)}></input>
            </label>
            <label className="label-form">:Password
            <input className="input-sub" required value={password} type="password" onChange={e=> setpassword(e.target.value)}></input>
            </label>
            <label className="label-form">
             <input className="input-sub" name="acceptedTerms" type="checkbox"  onChange={e => setAcceptedTerms(e.target.value)} required />
             I accept the terms of service
           </label>
           <button className="btnn-submit-form">Submit</button>
           <div className="box-rigester">
             <Link to="/Rigester"><span>Rigester</span></Link>
             <Link><span>?Forget passwords</span></Link>
           </div>
             </form>
       </div>
        </>
    )
}
export default Login