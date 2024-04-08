import '../CSS/SlideImage.css';

import { extractSubstring } from '../Utils/extractSubstring';
// eslint-disable-next-line react/prop-types
export default function SlideImage({SubTitle,Heading,imageLink}){
    const style1 = {
        backgroundImage: `url(${imageLink})`,
        overflow:"hidden !important",
        background:"cover"
    }
    // let service_link = "product";
    // eslint-disable-next-line react/prop-types
    let service_link = extractSubstring(Heading.toLowerCase());
    return (
        <>
        <div className="mySlides fade show" style={style1}>
            <div className="background-overlay"></div>
            <div className="slide-info">
                <p> {SubTitle}</p>
                <h1 style={{color:"white"}}>{Heading}</h1>
                
                <button className="btn btn-md btn-primary service-btn" style={{padding:"10px 0"}}>
                    <a href={`/service/${service_link}-photography`}>
                        <span style={{color:"white",marginRight:"7px"}}><i className="fa-solid fa-arrow-right"></i></span>
                        View Work </a>
                    </button>
                    
                
            </div>
        </div>
        </>

    )
}