import React, { useEffect ,useState  } from 'react'
import "./SendEmail.css"
import { useNavigate } from 'react-router-dom'
import IMG from "../images/final-3.png"
import LogoImgage from "../images/logo.jpg"
function SendEmail() {
    let navigate =useNavigate({});
    const [counter, setCounter] =useState(20);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if(counter===0){
            navigate('/reset')
        }
    }, [counter, navigate]);
return (
<>
<div className="send-email">
        <div className="left-box">
        <h2 className="sendEmail-title align-items-center fs-3"> <img src={LogoImgage} alt="Logo" className="logoimage "/></h2>
        <img src={IMG} alt="" className="image-sendEmail"/>
        <div className="mb-5">
        <h5>We Send Verification Email To The Email You’ve Been</h5>
        <span>Entered</span>
        </div>
        <p>Account Creation Operation Will Be Cancelled Within <br/>{counter} Seconds</p>
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

export default SendEmail
