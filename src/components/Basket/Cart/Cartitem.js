import React  ,{useState}from 'react';
import ReactDOM from 'react-dom';
import './cartitem.css';
import { connect } from "react-redux";
 import {adjustItemQty,removeFromCart,} from '../../../redux/shopping/shopping-action';

function Cartitem ({ item, adjustQty, removeFromCart })
{
    const [input, setInput] = useState(item.qty);
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
      };
    return(
        <>
        <div className="cartItem">
            <img className="cartItem__image" src={item.src}></img>
            <div className="cartItem__details">
                <p className="details__title">{item.titelcource}</p>
                <p className="details__desc">{item.deccripecource}</p>
                <p className="details__price">${item.price}</p>
            </div>
            <div className="cartItem__action">
                <div className="cartItem__qty">
                <label htmlFor="qty">Qty</label>
                     <input min="1"  type="number"  id="qty" name="qty" value={input}   onChange={onChangeHandler}  />
                </div>
                <button   onClick={() => removeFromCart(item.id)} className="actions__deleteItemBtn"  >
                 <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt=""/></button>
            </div>
        </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(Cartitem);

