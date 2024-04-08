import { useEffect } from 'react';
import SlideImage from './SlideImage.jsx';
import '../CSS/HomeSlideShow.css';
import productimage from '../images/product_image.jpg';
import service_fashion from '../images/service_fashion.jpg';

export default function HomeSlideShow(){
    let slideIndex = 1;
    let showSlides = (n)=> {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        //   slides[i].style.opacity = 0;
          slides[i].style.transition = "opacity 1s ease-in-out";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
      }
      useEffect(() => {
        showSlides(slideIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run only once after initial render

    let currentSlide = (n)=>{
        showSlides(slideIndex = n);
        
    }

    return(
        <>
            <div className="slideshow-container">
              
                <SlideImage SubTitle="P H O T O G R A P H Y" Heading="COMMERCIAL PRODUCT PHOTOGRAPHY" imageLink={productimage}/>
                <SlideImage SubTitle="P H O T O G R A P H Y" Heading="FASHION PHOTOGRAPHY" imageLink ={service_fashion}/> 
                <SlideImage SubTitle="P H O T O G R A P H Y" Heading="CORPORATE/INDUSTRIAL PHOTOGRAPHY" imageLink={productimage}/>
    
            </div>


            <div className="dot-container" >
                <span className="dot " onClick={() => currentSlide(1)}><p>.</p></span>
                <span className="dot" onClick={() => currentSlide(2)}><p>.</p></span>
                <span className="dot" onClick={() => currentSlide(3)}><p>.</p></span>
            </div>

        </>
    )
}