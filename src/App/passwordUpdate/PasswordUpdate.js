import React from 'react'
import {useNavigate } from 'react-router-dom'
import IMGUpdata from "../images/password updata.png"
import LogoImgage from "../images/logo.jpg"
import "./PasswordUpdata.css"
function PasswordUpdate() {
    let navigate =useNavigate({});
    const UpdateHandle=()=>{
        navigate('/login')
    }
return (
<>
<div className="PasswordUpdate">
        <div className="left-box">
        <h2 className="updata-title align-items-center fs-3"> <img src={LogoImgage} alt="Logo" className="logoimage "/></h2>
        <img src={IMGUpdata} alt="" className="image-passwordUpdata"/>
        <h4>Password Updated</h4>
        <p>Your Password Has Been Updated!</p>
        <button className="form-updata-btn" type="button" onClick={UpdateHandle}>Login</button>
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

export default PasswordUpdate
