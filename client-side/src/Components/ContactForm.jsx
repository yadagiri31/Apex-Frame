import  {useState} from 'react';
import '../CSS/ContactForm.css'
export default function ContactForm(){
    let [formData,setFormData] = useState({
        Name:"",
        Email:"",
        Phone:"",
        Message:"Your Message"
    });

    let handleInputChange = (event)=>{
        let fieldname = event.target.name;
        let newvalue = event.target.value;
        setFormData((currData)=>{
            return {...currData,[fieldname]:newvalue};
        })
    }
    return (
        // 462.5*599.7
        <div>   
            <form  className="needs-validation">
                <p><b></b></p>
                <h1><b>Get in touch</b></h1>
                <p><b></b></p>

                <div className="form-row row">
                    <div className="form-group col">
                    
                    <input type="text" className="form-control"  placeholder="Your Name*"
                    value={formData.Name} name="Name"
                    onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group col">
                    
                    <input type="email" className="form-control "  
                    placeholder="Your Email*" 
                    value={formData.Email} name="Email"
                    onChange={handleInputChange}  required/>
                    </div>
                </div>
                <div className="form-group">
                   
                    <input type="te" className="form-control" 
                    placeholder="Your Phone*" 
                    value={formData.Phone} name="Phone"
                    onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" cols='60' rows='8'
                    value={formData.Message} name="Message"
                    onChange={handleInputChange}>Your Message</textarea>
                </div>

            <button type="submit" className="btn  btn-lg btn-primary">Submit</button>
            </form>
           
          
        </div>
       
    )
}