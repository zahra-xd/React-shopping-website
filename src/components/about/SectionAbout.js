import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Aboutleft from './Aboutleft'
function SectionAbout()
{
    return(
        <>
        <div className="mt-100">
           <About  imag={'./image/xcourse_4.jpg.pagespeed.ic.hSqiIjtVk2.png'}  titel={'Why Academics Works'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?'} text2={'Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere.'} />
           <Aboutleft titel={'Personalized Learning'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque dolore libero corrupti! Itaque, delectus?'} text2={'Modi sit dolor repellat esse! Sed necessitatibus itaque libero odit placeat nesciunt, voluptatum totam facere.'}  imag={'./image/xcourse_5.jpg.pagespeed.ic.lm2HojYZKh.png'}/>
        </div>
        </>
    )
}
export default  SectionAbout