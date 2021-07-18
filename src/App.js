import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router ,Redirect ,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import Login from './components/pages/Login';
import Rigester from './components/pages/Rigester';
import Pagecourse from './components/products/Pagecourse';
import Cart from './components/Basket/Cart';
import { connect } from 'react-redux';
function App  ({ current }){
    return (  
      <Router>
      <Route path='/' exact component={Home} />
      <Route path='/about us' exact component={Services} />
      <Route path='/products' exact component={Product} />
      <Route path='/login' exact component={Login} />
      <Route path='/Rigester' exact component={Rigester} />
      <Route path='/Cart' exact component={Cart}></Route>
       {!current ? (
          <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={Pagecourse} />
          )}
        </Router>
    );
          }
          const mapStateToProps = (state) => {
            return {
              current: state.shop.currentItem,
            };
          };
export default connect (mapStateToProps) (App);
