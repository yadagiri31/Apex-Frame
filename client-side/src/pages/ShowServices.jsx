import '../CSS/ShowServices.css';
import {useState,useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Navimage from '../Components/Navimage';
import Footer from '../Components/Footer';
import { getToken } from '../Utils/getToken';
export default function ShowServices(){
    let navigate = useNavigate();
    const { category } = useParams();
    const subTitle = category.toUpperCase().replace('-',' ');
    
    let token = getToken();
    let [val,setVal] = useState(0);
    let [data,setData] = new useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/service/${category}`)
          .then((response) => response.json())
          .then((item) => {
            if(item.success==false){
                
                navigate("/services");
            }else{
                console.log("success...");
                setVal(item.val);
                setData(item.document);
            }
          });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[category]); 


      useEffect(()=>{
        if(!token){
            console.log("you must be logged in");
            navigate('/login');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },token)

    let style1 = {
        height:"300px",
        width:"450px"
    }
    let style2 = {
        width:"450px"
    }
    return(
        <>

            <Navbar />
            <Navimage Title="S E R V I C E" subTitle={subTitle}/>

            <div className="images-col" style={{margin:"100px",width:"1500px"}}>
                { data && data.map((item)=>(
                    <div key={item._id} >
                        {item && item.images.map((image,ind)=>(
                        <div className="service_image " key={ind} >
                            {/* <div className="background-overlay"></div> */}
                            {val==1 && <img style={style1} src={image}/>
                            }
                            {val==2 && <img src={image} style={style2} />}
                            
                        </div>
                        
                        ))}
                    </div>
                ))}
            </div>

            <Footer />
            
        </>
    )
}