import React from 'react';
import ReactDOM from 'react-dom';
import CardTeam from './CardTeam';

function Cardsteam() {
    return ( 
        <>
         <section className="mt-100">
          <div className="container"> 
          <div className="row justify-content-center">
          <div className="col-lg-5">
              <div className="main_title">
                  <h2 class="mb-3">Our Team </h2>
                  <p>Replenish man have thing gathering lights yielding shall you</p>
             </div>
        </div>
          </div>  
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <CardTeam name={'Mated Nithan'} job={'Sr. web designer'} src={'./image/xt1.jpg.pagespeed.ic.K0AD1qx4ww.png'} dec={'If you are looking at blank cassettes on the web, you may bevery confused at the.'}></CardTeam>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <CardTeam name={'David Cameron'} job={'Sr. web designer'} src={'./image/xt2.jpg.pagespeed.ic.Wnnxjw3cXO.png'} dec={'If you are looking at blank cassettes on the web, you may bevery confused at the.'}></CardTeam>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <CardTeam name={'Jain Redmel'} job={'Sr. web designer'} src={'./image/xt3.jpg.pagespeed.ic.l__z3e6GGe.png'} dec={'If you are looking at blank cassettes on the web, you may bevery confused at the.'}></CardTeam>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 single-trainer">
                <CardTeam name={'Nathan Macken'} job={'Sr. web designer'} src={'./image/xt4.jpg.pagespeed.ic.BmplIR4tbn.png'} dec={'If you are looking at blank cassettes on the web, you may bevery confused at the.'}></CardTeam>
            </div>
          </div>
          </div>
       </section>
        </>
    
    )
}
export default Cardsteam