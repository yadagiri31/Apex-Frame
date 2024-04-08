import '../CSS/ServiceList.css';
import ServiceCard from './ServiceCard.jsx';
import serviceproduct from '../images/service_product.jpg';
import servicefashion from '../images/service_fashion.jpg';
import servicecorporate from '../images/service_corporate.jpg';
import servicevideo from '../images/service_video.jpeg'
export default function ServiceList(){
    return (
        <>
            <div className="row" style={{margin:"100px"}}>
                <div className="card1 col">
                    <ServiceCard Title="P R O D U C T" SubTitle="Product Photography" imageLink={serviceproduct} serviceType="product-photography"/>
                </div>
                <div className="card2 col">
                <ServiceCard Title="F A S H I O N" SubTitle="Fashion Photography" imageLink={servicefashion} serviceType="fashion-photography"/>
                </div>
                <div className="card2 col">
                <ServiceCard Title="C O R P O R A T E" SubTitle="Corporate Photography" imageLink={servicecorporate} serviceType="corporate-photography"/>
                </div>
                <div className="card2 col">
                <ServiceCard Title="V I D E O P R O D U C T I O N" SubTitle="Corporate Videos" imageLink={servicevideo} serviceType="corporate-videos"/>
                </div>
            </div>
           
        </>
    )
}