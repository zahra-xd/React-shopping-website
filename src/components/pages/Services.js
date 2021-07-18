import React from 'react';
import ReactDOM from 'react-dom';
 import Navbar from '../navbar/Navbar'
import '../pages/services.css'
import  Swiperslideblog from '../swiper/Swiperslideblog';
 import SectionAbout from '../about/SectionAbout';
 import SectionKey from '../about/SectionKey';
 import Cardsteam from '../card/Cardsteam';
 import Footer from '../footer/Footer'
function Services()
{
    return(
    <>
       <Navbar ></Navbar>
       <Swiperslideblog></Swiperslideblog>
       <SectionAbout />
       <SectionKey/>
       <Cardsteam />
       <Footer></Footer> 
       

        </>
    )
}
export default Services