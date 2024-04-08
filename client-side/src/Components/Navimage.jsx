import '../CSS/Navimage.css';

// eslint-disable-next-line react/prop-types
export default function Navimage({Title,subTitle}) {
    return (
        <>
        
            <section className="navbar-image" data-overlay-dark="7">
            <div className="background-overlay"></div>
                <div className='page-info'>
                    <h6 style={{color:"orangered"}}>{Title}</h6>
                    <h1 className="title" >{subTitle}</h1>
                </div>
            </section>
            <hr className="line-vr-section"></hr> 

        </>
    );
}
