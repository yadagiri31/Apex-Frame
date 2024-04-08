import Navbar from "../Components/Navbar"
import HomeSlideShow from "../Components/HomeSlideShow";
import AboutInfo from '../Components/AboutInfo.jsx'
import Vrline from "../Components/Vrline.jsx";
import Footer from "../Components/Footer.jsx";
// import {useEffect,useState} from 'react';
// import '../Utils/Slideshow.js'
export default function Home(){
    
    return (
        <>
           <Navbar />
           <HomeSlideShow />
           <AboutInfo />
           <Vrline />
           <Footer />

        </>
    )
}