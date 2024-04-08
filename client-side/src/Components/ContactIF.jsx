import ContactInfo from '../Components/ContactInfo.jsx';
import ContactForm from '../Components/ContactForm.jsx';
import '../CSS/ContactIF.css';
export default function ContactIF(){
    return(
        <>
            <div className="row contact-if">
                <div className="col-md-12">
                    <h6 style={{color:"#f96f00"}}>L O C A T I O N</h6>
                    <h1>CONTACT US</h1>
                </div>
                <div className="col-md-6">
                    <ContactInfo />
                </div>
                <div className="col-md-6">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}