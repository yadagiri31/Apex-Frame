import {useState,useEffect} from 'react';
export function ReviewList(){
    let [reviews,setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/`)
          .then((response) => response.json())
          .then((item) => {
                setReviews(item);
          });
      },[reviews]); 
      return(
        <>
            <h1>Reviews</h1>
            <div className="Review-card">
                {reviews&& reviews.map((item)=>(
                    <div key={item._id}>
                        <h1>Rating is: {item.rating}</h1>
                        <p>{item.comment}</p>
                    </div>
                ))}
            </div>
        </>
      )
}