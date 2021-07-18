import React  from 'react';
import ReactDOM from 'react-dom';
import Pagelinksource from './Pagelinksource'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
function Pagecourse()
{
    return(
        <>
        <Navbar></Navbar>
        <Pagelinksource ></Pagelinksource>
        <Footer></Footer>
        </>
    )
}
export default Pagecourse