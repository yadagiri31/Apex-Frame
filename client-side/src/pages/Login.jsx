import '../CSS/Login.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [loginformData, setLoginFormData] = useState({
        username: "",
        password: ""
    });


    const navigate = useNavigate();
    useEffect(() => {
        setLoginFormData({ username: "",password: "" });
    }, []);
    const handleInputChange = (event) => {
        const fieldName = event.target.name;
        const newValue = event.target.value;
        setLoginFormData((prevData) => ({
            ...prevData,
            [fieldName]: newValue
        }));
    };5

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await fetch("http://localhost:8080/login",{
                method:"POST",
                headers:{
                    'content-Type': 'application/json',
                },
                body:JSON.stringify(loginformData),
            });
            const data = await res.json();
            if(data.success===true && data.token && data.username){
                console.log(data.token);
                localStorage.setItem('username',data.username);
                localStorage.setItem('token', data.token);
                navigate("/");
            }else{
                
                navigate("/login");
            }
            
            
        
        } 
        catch(error){
            setLoginFormData((currData)=>{
                return(
                    {...currData,username:"",password:""}
                )
            })
            navigate('/login');
        }
         // Just for debugging, remove this line once confirmed working
        // You can add your fetch request or other logic for form submission here
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation login">
            <h2 className='mb-4 offset-4'>Login</h2>
            <div className="form-outline form-white mb-4 ">
                <label className="form-label" htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={loginformData.username}
                    name="username"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input
                    type="password"
                    id="typePasswordX"
                    className="form-control"
                    value={loginformData.password}
                    name="password"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <button className="btn btn-outline-light btn-lg px-5 mb-3 offset-3" type="submit" >Login</button>
        </form>
    );
}
