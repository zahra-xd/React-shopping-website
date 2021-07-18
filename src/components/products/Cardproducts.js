import React ,{useState} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './Pagelinksource.css';
import '../swiper/swiper.css';
import {connect} from 'react-redux'
import { addToCart , loadCurrentItem} from '../../redux/shopping/shopping-action';
function Cardproducts({ product, addToCart ,loadCurrentItem })
{
    const [likes, setLikes] = useState(124);
    const [updated, setUpdated] = useState(false);
    const updateLikes = (() => {
        if (!updated) {
          setLikes(prevLikes => {
            return prevLikes + 1;
          });
          setUpdated(prevUpdated => {
            return true;
          });
        } else {
          setLikes(prevLikes => {
            return prevLikes - 1;
          });
          setUpdated(prevUpdated => {
            return false;
          });
        }
   });
    return(
    <>
        <div className="col-md-6 col-lg-4  mt-8">
        <div className="single_course">
             <div className="course_head">
                 <img className="img-course" src={product.src}></img>
             </div>
             <div className="course_content">
                 <span className="price">${product.price}</span>
                 <Link to={`/product/${product.id}`}><h4 onClick={() => loadCurrentItem(product)} className="mb-3">{product.titelcource}</h4></Link>
                 <p>{product.deccripecource}</p>
                  <div>
                     <Link ><button onClick={()=>addToCart(product.id)} className="btn-cart">ADD to cart</button></Link>
                   </div>
             </div>
             <div className=" course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                 <div className="mt-lg-0 mt-3">
                     <span className="meta_info mr-4 ml-20"> {product.timer}<Link><i className="fa fa-clock mr-2 cl-icon"></i></Link></span>
                     <span className="meta_info" >{likes}<Link><i onClick={updateLikes}  className="fa fa-heart mr-2 cl-icon color-icon"></i></Link></span>
                 </div>
                 <div className="authr_meta">
                     <span className="d-inline-block ml-2">{product.nameteacher}</span>
                     <img src={product.srcteacher}></img>
                 </div>
             </div>
        </div>
        </div>
   </>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
export default connect(null ,mapDispatchToProps)(Cardproducts) 