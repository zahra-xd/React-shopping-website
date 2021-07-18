import React ,{useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navbar  from '../navbar/Navbar';
import './Cart.css'
import Cartitem from './Cart/Cartitem';
import { connect } from "react-redux";
function Cart({cart})
{
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
    
        cart.forEach((item) => {
          items += item.qty;
          price += item.qty * item.price;
        });
    
        setTotalItems(items);
        setTotalPrice(price);
      }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    return(
        <>
        <Navbar />
        <div className="cart">
                <div className="cart__items"> 
                {  cart.map((item) => {
                     return <Cartitem key={item.id} item={item} />
                    })}
                </div>
                <div className=" cart__summary">
                    <h3 className="summary__title">Total shopping cart</h3>
                    <div className="summary__price">
                        <span> TOTAL: ({totalItems} items)</span>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className="btn-shoping">
                        <button className="summary__checkoutBtn">proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
export default connect(mapStateToProps) (Cart)