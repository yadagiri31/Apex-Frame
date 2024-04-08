import Navbar from '../Components/Navbar.jsx';
import Navimage from '../Components/Navimage.jsx';
import Vrline from '../Components/Vrline.jsx';
import ContactIF from '../Components/ContactIF.jsx';
import Footer from '../Components/Footer.jsx';
export default function Contact(){
    return (
        <>
            <Navbar />
            <Navimage Title="C O N T A C T" subTitle="Contact Us"/>
            <Vrline />
            <ContactIF />
            
            <Vrline />
            <Footer />
        </>
    )
}