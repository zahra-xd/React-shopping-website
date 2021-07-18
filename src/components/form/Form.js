import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import '../form/Form.css';

function Form ()
{
    const [name ,setname]=useState("");
    const [phone,setphone]=useState("");
    const[email ,setemail]=useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false)
    const handleSubmit = (event) => {
        console.log(`
          Email: ${email}
          Name:${name}
          Phone:${phone}
          Accepted Terms: ${acceptedTerms}
        `);
        event.preventDefault();
      }
 
    return(
        <>
        <div className="col-lg-4 offset-lg-1">
        <form  className="form-submit" >
            <h3>Courses for Free</h3>
            <label className="label-form">:name
            <input className="input-sub" value={name} type="text" onChange={e=>setname (e.target.value)}></input>
            </label>
            <label className="label-form">:phone
            <input className="input-sub" required value={phone} type="tel" onChange={e=> setphone (e.target.value)}></input>
            </label>
            <label className="label-form">:email
            <input className="input-sub" required value={email} type="email" onChange={e=> setemail(e.target.value)}></input>
            </label>
            <label className="label-form">
             <input className="input-sub" name="acceptedTerms" type="checkbox"  onChange={e => setAcceptedTerms(e.target.value)} required />
             I accept the terms of service
           </label>
           <button className="btnn-submit-form">Submit</button>
             </form>
       </div>
        </>
    )
}
export default Form 