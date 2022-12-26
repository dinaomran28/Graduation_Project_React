import React, { useEffect ,useState} from 'react'
import {useNavigate} from "react-router-dom"
import userDefulat from "../images/user.png"
import { AiOutlineClose } from "react-icons/ai";
import IMGUpdata from "../images/password updata.png"
import axios from "axios"
import "./profile.css"
function Profile(props) {
    const [user,setuser] = useState({})
    const [currentPassword,setcurrentPassword] = useState("")
    const [NewPassword,setNewPassword] = useState("")
    const [ConfirmPassword,setConfirmPassword] = useState("")
    const [Message,setMessage] = useState("")
    const [ChangeDone,setChangeDone] = useState(null)
    let navigate =useNavigate();
    useEffect(()=>{
        if (props.user) {
            setuser({
                UserName:props.user.UserName,
                UserId:props.user.UserId ,
                UserEmail:props.user.UserEmail,
                UserToken:props.user.UserToken
        })
        }
        else{
            navigate("/login")
        }
    },[navigate, props.user])
        useEffect(()=>{
            let profileOptions = document.querySelectorAll(".profile-options ul li")
            profileOptions.forEach((e) => {
                e.addEventListener("click", () => {
                    document.querySelector(".profile-options ul li.active").classList.remove("active")
                    e.classList.add("active")
                    document.querySelectorAll(".profile-inputs").forEach((profile) => {
                        profile.classList.remove("active")
                        profile.classList.add("hidden")
                    })
                    document.querySelector("." + e.dataset.type).classList.add("active")
                    document.querySelector("." + e.dataset.type).classList.remove("hidden")
                })
            })
            var offerBtn = document.querySelector(".Btnchange-password")
        let closeIcon = document.querySelector(".Iconclose")
            offerBtn.addEventListener("click", () => {
                document.querySelector(".modal-qr").classList.add("showQr")
            })
            closeIcon.addEventListener("click", () => {
                document.querySelector(".modal-qr").classList.remove("showQr")
            })
        })
        const ChangePassword=async(e)=>{
            e.preventDefault();
            const passUpdata={
                currentPassword: currentPassword,
                newPassword: NewPassword,
                confirmPassword: ConfirmPassword
            }
            if(NewPassword===ConfirmPassword){
                await axios.post(`https://bakr-app.herokuapp.com/api/user/changePassword/${user.UserId}`,passUpdata)
                .then(res=>{
                    localStorage.setItem('token',user.UserToken)
                    console.log(res.data.message);
                    if(res.data.status){
                        setChangeDone(true);
                        setMessage(res.data.message);
                    }
                    else{
                        alert(res.data.message);
                    }
                })
            }
            
            else{
                alert("Somthing Error !!!!!")
            }
        }
return (
    <>
            <div className="profile">
            <div className="profile-info border">
                <div className="profile-heading d-flex justify-content-center align-items-center flex-column py-1 pb-2 px-2 text-center">
                    <div className="profile-img">
                        <img src={userDefulat} alt=""/>
                        <input type="file" accept="imgae/**" /*onChange={changeProfileImg()} *//>
                    </div>
                    <h3 className="fs-3 my-2">Profile</h3>
                </div>
                <div className="profile-inputs-group pt-3  ps-4 pe-5 border-top">
                    <div className="row">
                        <div className="col-lg-3 px-3 border-end">
                            <div className="profile-options">
                                <ul className="list-unstyled">
                                    <li className="mb-5 active fs-4 fw-bold" data-type="account">Account info</li>
                                    <li className="mb-5 fs-4 fw-bold" data-type="address">Saved address</li>
                                    <li className="mb-5 fs-4 fw-bold" data-type="payment">Payment history</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="profile-inputs px-3 active account">
                                <div
                                    className="inputs d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
                                    <h5>Name</h5>
                                    <input type="text" className="form-control" placeholder={user.UserName} id="name"/>
                                    <button className="Btnchange">Change Name</button>
                                </div>
                                <div
                                    className="inputs d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
                                    <h5>Mail</h5>
                                    <input type="email" className="form-control" placeholder={user.UserEmail} id="mail"/>
                                    <button className="Btnchange">Change Mail</button>
                                </div>
                                <div
                                    className="inputs d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row">
                                    <h5>Password</h5>
                                    <input type="password" className="form-control" id="passowrd" value={ChangeDone? NewPassword:"***********"}/>
                                    <button className="Btnchange-password">Change password</button>
                                </div>
                                
                            </div>
                            <div className="profile-inputs px-3 hidden address">
                                <div
                                    className="inputs d-flex justify-content-around align-items-center py-3 px-2 border-bottom mb-2">
                                    NO information &amp; This Service Not Available Now
                                </div>
                            </div>
                            <div className="profile-inputs px-3 hidden payment">
                                <div
                                    className="inputs d-flex justify-content-around align-items-center py-3 px-2 border-bottom mb-2">
                                    NO information &amp; This Service Not Available Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="modal-qr d-flex  justify-content-center align-items-center ">
        <div className="bg-light  part-Changepass-body d-flex flex-column justify-content-center align-items-center position-relative">
            <AiOutlineClose className="Iconclose"/>
            {!ChangeDone ? (  <div>
            <h4>Change your Password</h4>
            <form onSubmit={ChangePassword}>
                <div className="PART-INPUT">
                    <input type="password" className='btn-UpdataPass' placeholder="Current Password" required 
                    onChange={(e)=>setcurrentPassword(e.target.value)}/>
                </div>
                <div className="PART-INPUT">
                    <input type="password" className='btn-UpdataPass' placeholder="New Password" required
                    onChange={(e)=>setNewPassword(e.target.value)}/>
                </div>
                <div className="PART-INPUT">
                    <input type="password" className='btn-UpdataPass' placeholder="Confirm Password" required
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <button type="submit" className='Btnchange-Profile'>Change Password</button>
                </form>
            </div>) :(<div className="part-Changepass-body">
                <img src={IMGUpdata} className='IMGE-Done' alt="imag" />
                <p>{Message}</p>
            </div>) }
        </div>
    </div>
    </>
)
}

export default Profile