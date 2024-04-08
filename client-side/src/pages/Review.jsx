import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import '../CSS/Review.css';
import  {getToken} from '../Utils/getToken.js';
export default function Review(){
    const [value, setValue] = React.useState(0);
    const [comment,setComment] = React.useState("");
    let token = getToken();
    let navigate = useNavigate();
    React.useEffect(()=>{
        if(!token){
            navigate("/login");
        }
    },[navigate, token])
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await fetch("http://localhost:8080/review/add",{
                method:"POST",
                headers:{
                    'content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ rating: value, comment: comment }),
            });
            const data = await res.json();
            if(data.success===true){
                setComment("");
                setValue(0);
                alert("review added succesfully");
                navigate("/review/add");
            }else{

                navigate("/login");
            }
            
            
        
        } 
        catch(error){
            
            navigate('/login');
        }
         // Just for debugging, remove this line once confirmed working
        // You can add your fetch request or other logic for form submission here
    };



    return(
        <form onSubmit={handleSubmit}>

     
        <div className="review-container">
            <div className="rating">
                <h1 className="rating-title">Add Your Review</h1>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                icon={<StarIcon style={{ fontSize: 40 }} />}
                size="large"
                />

                <br></br>
                <br></br>
                <p>Write Your Comment:</p>
                <textarea className="comment" value={comment} 
                cols='60' rows='6'
                onChange={(event,newValue)=>{
                setComment(newValue)
                }}>Comment Your opinion
                </textarea>
            </div>     
            <button className="review-btn1" type="cancel">Cancel</button>
            <button className="review-btn2" type="submit">Submit</button>       
        </div>
               
        </form>
        
    )
}