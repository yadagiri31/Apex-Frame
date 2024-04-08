import { removeToken } from "../Utils/removeToken";
import { getToken } from "../Utils/getToken";
export default function Logout(){
    let handleSubmit = ()=>{
        console.log(getToken());
        removeToken();
    }
    return (
        <>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}