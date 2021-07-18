import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Pagelinksource.css';
import { addToCart } from "../../redux/shopping/shopping-action";
function Pagelinksource ( { current, addToCart })
{
return(
    <>
      <div className="container mt-60">
          <h2 className="titel-course">{current.titelcource2}</h2>
          <div className="row">
              <div className="box-decribe-course box-card-suuorce ">
                  <div className="box-titel-link">
                      <div className="boox-link">
                          <span>Description</span>
                           <Link to="" className="link-tatal">Course sessions</Link>
                            <Link to="" className="link-tatal"><span className="badge-warning bg-w mr-3">{ current.count}</span>Comments</Link>
                      </div>
                  </div>
                  <div className="box-titell">
                      <p className="text-parag">{ current.text}</p>
                       <p className=""><img className="img-page-cource" image={current.image}></img></p>
                  </div>
              </div>
              <div className="kol-box kol-boxx">
              <div className="box-card-suuorce bg-box-c mr-1">
                    <div className="box-price-like">
                        <span>Number of participants</span>
                       <span>{current.countuserr}</span>
                   </div>
                   <div className="box-price-like">
                       <span>Course status  </span>
                       <span className="badge-warning">{current.statess}</span>
                   </div>
                   <div className="box-price-like">
                        <span>time</span>
                       <span>{current.timercource}</span>
                   </div>
                   <div className="box-price-like">
                        <span>count</span>
                       <span>{current.countjalese}</span>
                   </div>
                   <div className="box-price-like">
                        <span>Score</span>
                       <span className="icon-page-coursee"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                   </div>
                   <div>
                   <Link to="/Cart"><button onClick={() => addToCart(current.id)}className="details__addBtn"> Add To Cart </button></Link>
                   </div>
                </div>
              </div>
          </div>
      </div>
    </>
)
}
const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps) (Pagelinksource)