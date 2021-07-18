import React from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import '../swiper/swiper.css';

import { Link } from 'react-router-dom';

function Swiperr ()
{
  const data=   [
    {
      id:1,
      image:'./image/xc2.jpg.pagespeed.ic.wcDJnw-bpA.png',
      titel:'Social Media Network',
      text:'One make creepeth man bearing their one firmament won',
      price:'24',
      username:'Zahra',
      userimage:'./image/xauthor2.png.pagespeed.ic.QMaiKd7N75.png',
      countuser:'38',
      countlike:'103'
     },
     {
      id:2,
      image:'./image/xc1.jpg.pagespeed.ic.T_uhS3u3y1.png',
      titel:'Custom Product Design',
      text:'One make creepeth man bearing their one firmament won',
      price:'240',
      username:'Ali',
      userimage:'./image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
      countuser:'119',
      countlike:'73'
     },
     {
      id:3,
      image:'./image/xc3.jpg.pagespeed.ic.N4hOq0xjdk.png',
      titel:'Computer Engineering',
      text:'One make creepeth man bearing their one firmament won',
      price:'114',
      username:'Jim',
      userimage:'./image/xauthor1.png.pagespeed.ic.pOu_bXIKi1.png',
      countuser:'99',
      countlike:'893'
     },
     {
      id:4,
      image:'./image/xc1.jpg.pagespeed.ic.T_uhS3u3y1.png',
      titel:'Social Media Network',
      text:'One make creepeth man bearing their one firmament won',
      price:'74',
      username:'Sara',
      userimage:'./image/xauthor2.png.pagespeed.ic.QMaiKd7N75.png',
      countuser:'124',
      countlike:'133'
     },
     {
      id:5,
      image:'./image/xc2.jpg.pagespeed.ic.wcDJnw-bpA.png',
      titel:'Custom Product Design',
      text:'One make creepeth man bearing their one firmament won',
      price:'84',
      username:'Cameron',
      userimage:'./image/xauthor3.png.pagespeed.ic.JqBWNrvoU0.png',
      countuser:'24',
      countlike:'103'
     }
  ]
    return(
        <>
        <div className="container mt-100 mb-70">
        <div className="row justify-content-center"><div className="col-lg-5"><div className="main_title"><h2 className="mb-3">Our Expert Trainers</h2><p>Replenish man have thing gathering lights yielding shall you</p></div></div></div>
        <div className="row">
           <div className="col-lg-12">
               <Swiper id="myswiper"
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  0: {
                    width: 330,
                    slidesPerView: 1,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
              >
              { data.map(user=>(
                <SwiperSlide key={user.id}>
                  <div className="single_course">
                    <div className="course_head">
            <img src={user.image}></img>
           </div>
                    <div className="course_content">
                    <span className="price">${user.price}</span>
                    <span className="tag mb-4 d-inline-block">design</span>
                    <h4 class="mb-3">{user.titel}</h4>
                    <p>{user.text}</p>
           <div className=" course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
                 <div className="mt-lg-0 mt-3">
                   <span className="meta_info mr-4 ml-20">
                   {user.countuser}
                   <Link><i className="fa fa-user mr-2 cl-icon"></i></Link>
                   </span>
                   <span className="meta_info">
                   {user.countlike}
                     <Link><i className="fa fa-heart mr-2 cl-icon"></i></Link>
                     </span>
                     </div>
                     <div className="authr_meta">
                   <span className="d-inline-block ml-2">{user.username}</span>
                   <img src={user.userimage}></img>
                 </div>
                     </div>
           </div>
         </div>
       </SwiperSlide>
     ))}
    </Swiper>
         </div>
        </div>
        </div>
        </>
    )
}
export default Swiperr