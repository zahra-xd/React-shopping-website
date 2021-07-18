import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Sectionhero.css';
import Button from './Button';
import Aos from 'aos'
import "aos/dist/aos.css";
function Sectionhero()
{
useEffect(()=>
{
  Aos.init({duration:2000})
},[])
    return(
        <>
        <div className='hero-container'>
            <img className="image-header" src="./image/xhome-banner.jpg.pagespeed.ic.HLGqKgJtIp.png"></img>
           <div className="banner_inner">
              <div className="container">
                <div className="row">
                  <div data-aos="fade-up" className="col-lg-12">
                    <div className="banner_content text-center">
                    <p class="text-uppercase">Best online education service In the world</p>
                    <h2 class="text-uppercase mt-4 mb-5">One Step Ahead This Season</h2>
                    <div>
                      <button className="bttn">learn more</button>
                      <button className="btn-cource">see course</button>
                    </div>
                    </div> 
                  </div>
                </div>
              </div>
           </div>
        </div>
       </>
    )
}
export default Sectionhero