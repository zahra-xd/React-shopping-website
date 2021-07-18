import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar'
import '../pages/services.css'
import Productslist from '../products/Productslist'
function Product()
{
    return(
        <>
           <Navbar ></Navbar>
           <Productslist></Productslist>
           <Footer></Footer>
        </>
    )
}
export default Product