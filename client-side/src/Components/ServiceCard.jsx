import '../CSS/ServiceCard.css';

// eslint-disable-next-line react/prop-types
export default function ServiceCard({Title,SubTitle,imageLink,serviceType}){
    const link = `/service/${serviceType}`
    return (
        <>
            <div className="service_card">
            <img src={imageLink} alt="product"></img>
            <div className="intro">
                <div className="title">
                    <h3 style={{color:"#f96f00"}}>{Title}</h3>
                    <h3 style={{color:"white"}}>{SubTitle}</h3>
                </div>
                <a className="service_link" href={link}><i className="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
        </>
    )
}