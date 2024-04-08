import '../CSS/Signup.css';
import {  useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
export default function Signup(){
    let [signupformData,setSignFormData] = new useState({
        name:"",
        username:"",
        password:"",
        email:""
    });
    let navigate = useNavigate();
    useEffect(() => {
        setSignFormData({
            name: "",
            username: "",
            password: "",
            email: ""
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value;
        setSignFormData((prevData) => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await fetch("http://localhost:8080/signup",{
                method:"POST",
                headers:{
                    'content-Type': 'application/json',
                },
                body:JSON.stringify(signupformData),
            });
            const data = await res.json();
            if(data.success == false){
                setSignFormData(
                        {name:"",email:"",username:"",password:""}
                )
                navigate("/signup")
            }
            else{
                console.log(data.username)
                navigate('/');
            }
            
           
        
        } 
        catch(error){
            setSignFormData(
                    {name:"",email:"",username:"",password:""}
            )
            navigate('/signup');
        }
         
    };

    return (
        <div className="signup">
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={signupformData.name} onChange={handleInputChange} required/>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={signupformData.email} onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={signupformData.username} onChange={handleInputChange}  required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={signupformData.password} onChange={handleInputChange} required/>
            </div>
            <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    );
}