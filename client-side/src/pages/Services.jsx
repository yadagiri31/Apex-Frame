 import {useEffect} from 'react';
 import {  useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.jsx';
import Service_image from '../Components/Service_image.jsx';
import Vrline from '../Components/Vrline.jsx';
import ServiceList from '../Components/ServiceList.jsx';
import Footer from '../Components/Footer.jsx';
import { getToken } from '../Utils/getToken.js';
export default function Services(){

    let token = getToken();
    let navigate = useNavigate();
    useEffect(()=>{
        if(!token){
            console.log("you must be logged in");
            navigate('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])
    
    return(
        <>
            <Navbar />

            <Service_image />
            <Vrline />
            <ServiceList />
            <Vrline />
            <Footer />
        </>
    )
}