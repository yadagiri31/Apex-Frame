import {useEffect} from 'react'; 
import {getToken} from '../Utils/getToken.js';
import '../CSS/Navbar.css'; 
import apexframe from '../images/apexframe_media.png';
export default function Navbar() {
    let token = getToken();
    useEffect(() => {
        // This function will be called when the component mounts
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            // Add or remove the "nav-scroll" class based on scroll position
            if (window.scrollY > 90) {
                navbar.classList.add('nav-scroll');
            } else {
                navbar.classList.remove('nav-scroll');
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up by removing event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
        return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={apexframe} alt="..." height="36" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/our-portfolio">Our Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">Contact Us</a>
                        </li>
                        
                        {!token && (
                            <>
                                <li className="nav-item">
                                <a className="nav-link" href="/login">Sign in</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">Sign up</a>
                                </li>
                            </>
                        )}

                        {
                            token && (
                                <>
                                    <li className="nav-item">
                                    <a className="nav-link" href="/logout">Log out</a>
                                </li>
                                
                                </>
                            )
                        }


                        
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

        