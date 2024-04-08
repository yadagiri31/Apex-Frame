import Navbar from '../Components/Navbar.jsx';
import Navimage from '../Components/Navimage.jsx';
import AboutInfo from '../Components/AboutInfo.jsx';
import Vrline from '../Components/Vrline.jsx';
import Footer from '../Components/Footer.jsx';


export default function About(){
    return (
        <>
            <Navbar />
            <Navimage Title="A B O U T" subTitle="About Us" />
            <Vrline />
            <AboutInfo />
            <Vrline />
            <Footer />
        </>
    )
}

