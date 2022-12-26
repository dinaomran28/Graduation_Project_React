import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IMG from "../images/final-3.png"
import LogoImgage from "../images/logo.jpg"
import "./forget.css"
function Forget() {
    let navigate =useNavigate({});
    const [Emailforget, setEmailforget] = useState('');
    const ForgetHandle=async(e)=>{
        e.preventDefault();
        const dataForget ={
            email : Emailforget
        }
        await axios.post("https://bakr-app.herokuapp.com/api/user/forgot_password/",dataForget)
        .then(response => {
            var Messagetext = response.data.message ;
            var statusText = response.data.status;
            if(statusText ===true) {
                navigate('/sendemail')
            }
            else{
                alert(Messagetext);
            }
        })
    .catch(err => alert(err));
    }
return (
<>
<div className="forgetPassword">
        <div className="left-box">
        <h2 className="forget-title align-items-center fs-3"> <img src={LogoImgage} alt="Logo" className="logoimage "/></h2>
        <img src={IMG} alt="" className="image-forgetpass"/>
        <h4>Forget Password</h4>
        <p>Reset Password Using Your Email Address</p>
        <form onSubmit={ForgetHandle} className="forget-form">
                <input type="email" id="Email" placeholder="Your Email" required
                onChange={e=>setEmailforget(e.target.value)}/>
                <button className="form-forget-btn" type="submit" id="btnSend" >Send Verification Email</button>
            </form>
        </div>
        <div className="right-box">
            {/* <div className="header">
                <nav>
                    <ul>
                        <li>
                            <Link className="link" to="/">
                            HOME
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/contact">
                            CONTACT US
                            </Link>
                        </li>
                    </ul>
                </nav> 
                <div>
                    <p className="logo">E-GUID</p>
                </div>
            </div> */}
            <button>Explore Egypt</button>
            <p>Find your favourite <br/> Place in Egypt</p>
        </div>
    </div>
    {/* <div className="message" id="message">
    {Message} 
    </div>  */}
</>
)
}

export default Forget
