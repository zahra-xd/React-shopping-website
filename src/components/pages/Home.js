import React ,{useState ,useEffect}  from 'react';
import ReactDOM from 'react-dom';
import Sectionhero from '../Sectionhero';
import '../../App.css';
import './loding.css';
import Card from '../card/Card';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Cardsteam from '../card/Cardsteam';
import  SectionUncoming from '../SectionUpcoming'
import Sectiontimer from '../form/Sectiontimer';
import Swiperr from '../swiper/Swiper'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {Redirect} from 'react-router-dom'
const override = css`
  display: flex;
  justify-content: center;
  text-align: center;
  margin:20% auto;
  align-items: center;
  border-color: orange;
`;

function Home()
{
   
    const[loding ,setloding]=useState(false);
    const token=localStorage.getItem("token")
    const [ loggin ,setloggin] =useState('true')

    useEffect(()=>
    {
          setloding(true)
          setTimeout(() => {
              setloding(false)
          }, 2000);
    },[])
            { if (loggin===false)
                  {
                    return <Redirect to="/login"></Redirect>
                  }
                }  
    return(
        <>
      
        {
          
            loding ?(<ClipLoader css={override} color={"F5A623"} loading={loding}  margin={2} size={50} />)
            :
            (
            <div>
            <Navbar ></Navbar>
            <Sectionhero></Sectionhero>
            <Card></Card> 
            <Cardsteam></Cardsteam>
            <SectionUncoming></SectionUncoming>
            <Sectiontimer></Sectiontimer>
            <Swiperr></Swiperr>
            <Footer></Footer>
            </div>
            )
        }
    
        </>
    )
}
export default Home;