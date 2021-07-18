import React  from 'react';
import ReactDOM from 'react-dom';
import './SectionUncoming.css';
import CardUncoming from './CaedUncoming'
import { Link } from 'react-router-dom';

function SectionUncoming()
{
 
    return(
        <>
        <div className="events_area"  id="products">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="main_title">
                        <h2 className="mb-3 text-white">Upcoming Events</h2>
                        <p>Replenish man have thing gathering lights yielding shall you</p> </div>
                   </div>
                </div>
                <div className="row">
                    <CardUncoming src={'./image/xe2.jpg.pagespeed.ic.3XyEgSPjzA.png'} date={'15'} month={' Jun'} datehour={' 12:00 AM - 12:30 AM'} location={' Hilton Quebec'} text={'One make creepeth man for so bearing their firmament wontfowl meat over seas great'}></CardUncoming>
                    <CardUncoming src={'./image/xe1.jpg.pagespeed.ic.Xjf7ZFLDLk.png'} date={'27'} month={' April'} datehour={' 16:00 AM - 14:30 AM'} location={' Hilton Quebec'} text={'One make creepeth man for so bearing their firmament wontfowl meat over seas great'}></CardUncoming>
                        <div className="col-lg-12 text-center">
                            <Link className="event-link "> <img className="ml-3" src='./image/xnext.png.pagespeed.ic.lX6ygr1jWn.png'></img>View All Event</Link>
                        </div>
                </div>
              
            </div>
        </div>
        </>
    )
}
export default SectionUncoming;