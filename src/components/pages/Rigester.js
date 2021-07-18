import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../form/Form.css';
function Rigester()
{
    const [name ,setname] =useState("");
    const [lastname ,setlastname] =useState("");
    const [phone ,setphone] =useState("");
    const[password ,setpassword]=useState("");
    const[email ,setemail]=useState("");
    const[address ,setaddress]=useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const handleSubmit = (event) => {
        console.log(`
          Passwords: ${password}
          Name:${name}
          Accepted Terms: ${acceptedTerms}
        `);
        event.preventDefault();
      }
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8">
                   <div className="card bg-sec border-0 mb-0">
                       <div className="card-body px-lg-5 py-lg-5">
                           <div className="text-center text-muted mb-4">
                               <small>Rigester</small>
                           </div>
                           <form  onSubmit={handleSubmit} className="row    needs-validation">
                               <div className="col-sm-6 form-group">
                                   <label><sub>*</sub>name</label><br></br>
                                   <input className="box-input" value={name} type="text" onChange={e=>setname (e.target.value)}></input>
                               </div>
                               <div className="col-sm-6 form-group">
                                   <label><sub>*</sub>lastname </label><br></br>
                                   <input className="box-input" value={lastname} type="text" onChange={e=>setlastname (e.target.value)}></input>
                               </div>
                               <div className="col-sm-6 form-group">
                                   <label> <sub>*</sub>   phone  </label><br></br>
                                   <input className="box-input" value={phone} type="text" onChange={e=>setphone (e.target.value)}></input>
                               </div>
                               <div className="col-sm-6 form-group">
                                   <label> <sub>*</sub>password </label><br></br>
                                   <input className="box-input"  value={password} type="password" onChange={e=>setpassword (e.target.value)}></input>
                               </div>
                               <div className="col-sm-6 form-group">
                                   <label> <sub>*</sub>email </label><br></br>
                                   <input className="box-input" value={email} type="email" onChange={e=>setemail (e.target.value)}></input>
                               </div>
                               <div className="col-sm-6 form-group">
                                   <label> <sub>*</sub>address</label><br></br>
                                   <input className="box-input" value={address} onChange={e=>setaddress (e.target.value)}></input>
                               </div>
                               <label className="label-form">
                                   <input className="input-sub" name="acceptedTerms" type="checkbox"  onChange={e => setAcceptedTerms(e.target.value)} required />
                                   I accept the terms of service
                               </label>
                               <button className="btnn-submit-form">Submit</button>
                        
                          <div className="box-rigester-log"><Link to="/login"><span>Login</span></Link><Link><span>?Forget passwords</span></Link></div>
                           </form>
                       </div>
                   </div>
                  
                </div>

            </div>
        </div>
        </>
    )
}
export default Rigester