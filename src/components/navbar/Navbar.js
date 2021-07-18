import React, { useState ,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import Button from '../Button';
import {connect} from 'react-redux';
function Navbar({cart}) {
       const [click, setClick] = useState(false);
       const [countcart ,setcountcart] =useState(0)
       const handleClick = () => setClick(!click);
       const closeMobileMenu = () => setClick(false);
       useEffect(()=>{
         let count = 0;
        cart.forEach(item => {
           count += item.qty
        });
       setcountcart(count)
       },[cart,countcart])
    return ( <>
            <nav className='navbarr'>
               <div className='navbar-container'>
               <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="ic-basket ">
                               <span className=" cart__counter">{countcart}</span>
                              <Link to="/Cart"><i className="fa fa-cart-plus col-icon-plas"></i></Link>
                     </li>
                   <li className='nav-item log-none'> <Link to='/login'><Button  titel={'Login / Rigester'} /> </Link></li> 
                   <li className='nav-item'>
                      <Link to='/' className='nav-links nav-linkk' onClick={closeMobileMenu}> Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Link  to='/about us' className='nav-links nav-linkk' onClick={closeMobileMenu}> about us</Link>
                    </li>
                     <li className='nav-item'>
                      <Link to='/products' className='nav-links nav-linkk' onClick={closeMobileMenu}>products</Link>
                    </li>
                    <li>
                        <Link  to='/sign-up'className='nav-links-mobile' onClick={closeMobileMenu} >Login /Register</Link>
                    </li>
                </ul>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="./image/download (1).png"></img>
                 </Link> 
              </div>
        </nav> 
        </>
    )
}
const mapStateToProps= state=>
{
    return{
        cart:state.shop.cart
    }

}
export default connect(mapStateToProps) (Navbar)