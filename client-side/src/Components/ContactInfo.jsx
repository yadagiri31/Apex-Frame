import '../CSS/ContactInfo.css';

export default function ContactInfo(){
    return (
        <div className='contact-info'>  

            <p>I'd love to hear from you! Please fill out the form below 
                or send a note directly with as much details
                as possible to WhatsApp +91 81300 34060</p>
            <div className="item"><b>Phone</b> :<a className="contact-link" href="#">+91 95732 53107</a></div>
            <div className="item"><b>Whatsapp</b> : <a className="contact-link" href="#">+91 95732 53107</a></div>
            <div className="item"><b>Address</b> : A313 A 2nd floor, Surya Nagar, Ghaziabad, Uttar Pradesh 201011</div>
            <div className="item"><b>Email</b>:<a className="contact-link" href="#">exposureinfinity@gmail.com</a></div>
            <div className="item"><b>Google Map</b> : <a className="contact-link" href="#">Get Directions</a></div>
        </div>
    )
}