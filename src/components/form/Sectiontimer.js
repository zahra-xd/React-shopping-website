import React ,{useState ,useRef ,useEffect} from 'react';
import ReactDOM from 'react-dom';
import '../form/Sectiontimer.css';
import  Form from './Form';

function Sectiontimer() {
    const [timedays ,settimedays]  =useState("00");
    const [timehour ,settimehour]=useState("00");
    const [timemints ,settimemints]=useState("00");
    const [timesecends ,settimesecends]=useState("00");
    let interval = useRef();
    const starttimer =()=>
    {
        const contdowndate= new Date('July 25 , 2021  00:00:00').getTime()
       interval=setInterval(()=>
           {
               const now =new Date().getTime()
               const distance=contdowndate-now;
               const days=Math.floor(distance / (1000*60 * 60 * 24))
               const hours=Math.floor((distance % (1000*60 * 60 * 24))/(1000*60*60))
               const minets =Math.floor((distance %(1000*60*60))/(1000*60));
               const secends=Math.floor((distance % (1000*60))/1000);
               if(distance<0)
               {
                 //stop timer 
                 clearInterval(interval.current)
               }
               else
               {
                   settimedays(days)
                   settimehour(hours)
                   settimemints(minets)
                   settimesecends(secends)
               }
           }
       ,1000)
    }
    useEffect(() => {
     
      starttimer();
      
      return() =>
      {
        clearInterval(interval.current)
      }
    })
return(
    <>
    <div className="section_gap registration_area mb-30">
        <div className="container">
            <div className="row align-items-center">
                <Form></Form>
                <div    className="col-lg-7 timer-day">
                  <div className="row clock_sec clockdiv">
                      <div className="col-lg-12">
                          <h1 className="mb-3 box-rejes">Register Now</h1>
                          <p>There is a moment in the life of any aspiring astronomer thatit is time to buy that first telescope. It’s exciting to thinkabout setting up your own viewing station.</p>
                      </div>
                      <div className="col clockinner1 clockinner">
                          <h1 className="seconds">{timesecends}</h1>
                          <span className="smalltext">Secs</span>
                      </div>
                     
                      <div className="col clockinner1 clockinner">
                          <h1 className="minutes">{timemints}</h1>
                          <span className="smalltext">Mins</span>
                      </div>
                      <div className="col clockinner1 clockinner">
                          <h1 className="hours">{timehour}</h1>
                          <span className="smalltext">Hours</span>
                      </div>
                      <div className="col clockinner1 clockinner">
                          <h1 className="days">{timedays}</h1>
                          <span className="smalltext">Days</span>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Sectiontimer