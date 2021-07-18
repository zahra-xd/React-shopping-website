import React from 'react';
import ReactDOM from 'react-dom';
 import CardItem from './CardItem';
import Cardtherbox from './Cardtherbox'
 import '../card/Card.css';

function Card()
{
    return(
        <>
       <section className="mt-150">
          <div className="container"> 
          <div className="row justify-content-center">
          <div className="col-lg-5">
              <div className="main_title">
                  <h2 class="mb-3">Awesome Feature</h2>
                  <p>Replenish man have thing gathering lights yielding shall you</p>
             </div>
        </div>
          </div>
        
          <div className="row">
              <div className="col-lg-4 col-md-6">
                  <Cardtherbox titel={'Global Certification'} description={'One make creepeth, man bearing theira firmament wont greatheaven'} ></Cardtherbox>
              </div>
              <div className="col-lg-4 col-md-6">
                  <Cardtherbox titel={'Global Certification'} description={'One make creepeth, man bearing theira firmament wont greatheaven'} ></Cardtherbox>
              </div>
              <div className="col-lg-4 col-md-6">
                  <Cardtherbox titel={'Global Certification'}  description={'One make creepeth, man bearing theira firmament wont greatheaven'} ></Cardtherbox>
              </div>
          </div>
          </div>
       </section>
        </>
    )
}
export default Card;

