import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../swiper/swiper.css';
 import SwiperCore, { Navigation } from 'swiper';
 import Aos from 'aos'
 import "aos/dist/aos.css";
 SwiperCore.use([Navigation]);
function Swiperslideblog()
{
    const data=[
        {
            id:1,
            image:'./image/xhome_slider_1.jpg.pagespeed.ic.hKqGt0WLBW.png',
            titel:'about us',
            describe:'Lorem ipsum dolor sit amet consectetur adipisicing'
        },
        {
            id:2,
            image:'./image/xhome-banner.jpg.pagespeed.ic.HLGqKgJtIp.png',
            titel:'Team us',
            describe:'Lorem ipsum dolor sit amet consectetur adipisicing'
        }, 
         {
            id:3,
            image:'./image/xhome_slider_1.jpg.pagespeed.ic.hKqGt0WLBW.png',
            titel:'cources',
            describe:'Lorem ipsum dolor sit amet consectetur adipisicing'
        }
    ]
    useEffect(()=>
     {
       Aos.init({duration:2000})
    },[])
    return(
        <>
          
            
                   <Swiper 
                   navigation
                   >
                       {   data.map(user=>
                       (
                          
                           <SwiperSlide key={user.id} className="bg" >
                               <div className="" >
                                   <div >
                                       <img className="img-blog"  src={user.image}></img>
                                   </div>
                                   <div className="text-slide-blog" data-aos="fade-up" >
                                          <h3 >{user.titel}</h3>
                                          <p>{user.describe}</p>
                                   </div>
                               </div>
                           </SwiperSlide>
                         
                       ))}
                   </Swiper>
        </>
    )
}
export default Swiperslideblog