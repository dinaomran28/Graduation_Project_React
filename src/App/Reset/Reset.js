import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import IMG from "../images/final-3.png"
import LogoImgage from "../images/logo.jpg"
import "./Reset.css"
function Reset() {
    let navigate =useNavigate({});
    const [Code, setCode] = useState('');
    const [Newpassword, setNewpassword] = useState('');
    const ResetHandle=async(e)=>{
        e.preventDefault();
        const dataReset ={
            token: Code,
            password : Newpassword
        }
        await axios.post("https://bakr-app.herokuapp.com/api/user/verify_code/reset_password/",dataReset)
        .then(response => {
            alert(response.data.message)
            var Messagetext = response.data.message ;
            var statusText = response.data.status;
            if(statusText ===true) {
                navigate('/passwordupdate')
            }
            else{
                alert(Messagetext);
            }
        })
    .catch(err => alert(err));
    }
return (
<>
<div className="reset">
        <div className="left-box">
            <h2 className="reset-title align-items-center fs-3"> <img src={LogoImgage} alt="Logo" className="logoimage "/></h2>
        <img src={IMG} alt="" className="image-forgetpass"/>
        <h4>Reset Password</h4>
        <p>Reset Password Using Your Email Address</p>
        <form onSubmit={ResetHandle} className="reset-form">
                <input type="text"  placeholder="Verify code" required 
                onChange={e=>{setCode(e.target.value)}}/>
                <input type="password" placeholder="new password" required
                onChange={e=>{setNewpassword(e.target.value)}}/>
                <button className="form-reset-btn" type="submit">Reset</button>
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
</>
)
}

export default Reset
