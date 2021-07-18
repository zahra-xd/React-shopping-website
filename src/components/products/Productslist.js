import React from 'react';
import ReactDOM from 'react-dom';
import Cardproducts from './Cardproducts';
import './productlist.css';
import {connect} from 'react-redux'
function Productslist({ products })
{
    return(
        <>
        <div className="bggg">
            <div className="text-course">
                <h2> Courses us</h2>
            </div>
        </div>
        <div className="container">
           <h2 className="t-course">Courses</h2>
               <div className="row mb-70">
                   {
                       products.map((product)=>{
                      return   <Cardproducts key={product.id} product={product}/>
                       })
                   }
               </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    };
  };
export default connect (mapStateToProps) (Productslist)