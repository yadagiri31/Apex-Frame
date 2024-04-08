import '../CSS/Footer.css';
import apexframe from '../images/apexframe_media.png';
export default function Contact() {
    return (
        <div className="Footer">
            <div className="row container-fluid">
                <div className="col-md-4 brand footer1">
                    <img className="logo" src={apexframe} alt="infinity-exposure" />
                    <div className="class-info">
                        <p>
                            Looking for the perfect photography/Videography of your product or brand?
                            At ApexFrame Media we strive to provide the best photography and Videography.
                        </p>
                    </div>
                    <hr />
                    <div className="row social-media-icons">
                        <div className="col"><i className="fab fa-facebook-f icons"></i></div>
                        <div className="col"><i className="fab fa-instagram icons"></i></div>
                        <div className="col"><i className="fab fa-pinterest-p icons"></i></div>
                    </div>
                </div>
                <div className="col-md-4 contact-info footer1">
                    <h2 className="touch">Get in Touch</h2>
                    <br />
                    apexframe social-media-icons<br />
                    <i className="fas fa-phone icons"></i>
                    <a href="tel:+919573253107" title="Call us">+91 95 7325 3107</a>
                    <br />
                    <i className="fab fa-whatsapp icons"></i>
                    <a href="tel:+919573253107">+91 95 7325 3107</a>
                    <br />
                    <i className="fas fa-envelope icons"></i>
                    <a href="mailto:apexframe@gmail.com" title="mail to us">apexframe@gmail.com</a>
                    <br />
                    <i className="fas fa-map-marker-alt"></i>
                    A313 A 2nd floor, Surya Nagar, Ghaziabad, Uttar Pradesh 201011
                    <br />
                </div>
                <div className="col-md-4 services footer1">
                    <h1 style={{color:"white"}}>ALL SERVICES</h1>
                    <hr />
                    <div className="serviceslist">
                        Product Photography <br />
                        Fashion Photography <br />
                        Corporate/Industrial Photography <br />
                        Corporate Videos
                    </div>
                </div>
            </div>
           
            <hr></hr>
            <br></br>
            <p className='copyright'>© 2024 ApexFrame Media. All right reserved. | Developed by Team Better Okay</p>
            <br></br>
        </div>
    );
}
