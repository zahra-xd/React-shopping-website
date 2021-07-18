import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
  import '../footer/Footer.css';
function Footer() {
    return (
     <>
      <footer className = "footer-area section_gap" >
        <div className = "container" >
        <div className = "row" >
        <div className = "col-lg-2 col-md-6 single-footer-widget" >
        <h4 > Top Products </h4> 
        <ul>
        <li> <Link href = "#" > Managed Website </Link></li >
        <li> <Link href = "#" > Manage Reputation </Link></li >
        <li> <Link href = "#" > Power Tools </Link></li>
        <li> <Link href = "#" > Marketing Service </Link></li >
        </ul> 
        </div> 
        <div className = "col-lg-2 col-md-6 single-footer-widget" >
        <h4 > Top Products </h4> 
        <ul>
        <li> < Link href = "#" > Managed Website </Link></li >
        <li> < Link href = "#" > Manage Reputation </Link></li >
        <li> < Link href = "#" > Power Tools </Link></li >
        <li> < Link href = "#" > Marketing Service </Link></li >
        </ul> 
        </div> 
        <div className = "col-lg-2 col-md-6 single-footer-widget" >
        <h4> Top Products </h4>
         <ul>
        <li> < Link href = "#" > Managed Website </Link></li >
        <li> < Link href = "#" > Manage Reputation </Link></li >
        <li> < Link href = "#" > Power Tools </Link></li >
        <li> < Link href = "#" > Marketing Service </Link></li >
        </ul> 
        </div> 
        <div className = "col-lg-2 col-md-6 single-footer-widget" >
        <h4> Top Products </h4> 
        <ul>
        <li> < Link href = "#" > Managed Website </Link></li >
        <li> < Link href = "#" > Manage Reputation </Link></li >
        <li> < Link href = "#" > Power Tools </Link></li >
        <li> < Link href = "#" > Marketing Service </Link></li >
        </ul> 
        </div>
         <div className = "col-lg-4 col-md-6 single-footer-widget" >
        <h4 > Newsletter </h4> 
        <p className = "parag-foot" > You can trust us.we only send promo offers, </p> 
        <div>
        <form>
        <input placeholder= "Your Email Address" required></input>
        <button className = "click-btn btn btn-default" > <span > subscribe </span></button >
        </form>
         </div> 
         </div> 
         </div>
          <div className = "row footer-bottom d-flex justify-content-between" >
           <p class = "col-lg-8 col-sm-12 footer-text m-0 text-white" > Copyright© 2021 All rights reserved | This template is made with by < a href = "https://colorlib.com"  target = "_blank" > Colorlib </a></p >
        <div className = "col-lg-4 col-sm-12 footer-social mt-3" >
         <Link > < i class = 'fab fa-instagram icona  ' /> </Link> 
         <Link > < i class = 'fab fa-google icona   ' /> </Link> 
         <Link> < i className = "fab fa-twitter icona" > </i></Link >
         <Link > < i className = "fab fa-linkedin icona" > </i></Link >
        </div>
         </div>
        </div> 
      </footer>
    </>
    )
}
export default Footer