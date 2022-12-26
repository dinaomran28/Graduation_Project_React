import React,{ useEffect ,useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "../LandingPage/LandingPage"
import HomeAfterLogin from "../Home_after_Login/Home_after_Login"
import "./Home.css"
import {useLocation} from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
function HomePage() {
    let location = useLocation(); 
    const [user,setuser] = useState({})
    useEffect(()=>{
        // // function Welcome
        // window.addEventListener("load", () => {
        //     document.getElementById("welcome").classList.add("active")
        //     setTimeout(() => {
        //         document.getElementById("welcome").classList.remove("active")
        //     }, 4000)
        // })
        if (location.state){
            console.log(location.state)
            setuser({
                UserName:location.state.Name,
                UserId:location.state.Id ,
                UserEmail:location.state.Email ,
                UserToken:location.state.Token
        })
        }
    },[location.state])
return (
    <>
    {/* <Navbar user={user}/> */}
        {location.state ? <HomeAfterLogin user={user} /> : <LandingPage/> }
    <div className="goUp ">
        <i className="bi bi-chevron-up"></i>
    </div>
    <div className="welcome" id="welcome">
        <p>Welcome {user.username} To Our Website</p>
    </div>
    </>
)
}
export default HomePage ;
