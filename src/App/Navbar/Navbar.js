import React, { useEffect } from "react"
import "./Navbar.css"
import { Link ,NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import {BiMenuAltRight  } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import LogoImgage from "../images/logo.jpg"
function Navbar(props){
    // responsive Navbar
    useEffect(() =>{
        // eslint-disable-next-line no-restricted-globals
        let currentLocation =location.href;
        let menu = document.querySelectorAll(".big-header nav ul li .navlinks")
        let menulength = menu.length;
        for(let i = 0; i < menulength; i++){
            if(menu[i].href===currentLocation){
                menu[i].className="active"
            }
        }
        let list = document.querySelector(".fa-list-alt")
            let close = document.querySelector(".fa-close")
            list.addEventListener("click", () => {
                document.querySelector(".big-header nav").classList.add("show")
                close.style.display = "block"
                list.style.display = "none"
            })
            close.addEventListener("click", () => {
                document.querySelector(".big-header nav").classList.remove("show")
                close.style.display = "none"
                list.style.display = "block"
            })
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 115) {
                    document.querySelector(".big-header nav").style.top = "0px"
                } else {
                    document.querySelector(".big-header nav").style.top = "115px"
                }
            })
    })
return (
    <>
    <div  className="small-header d-flex ">
        <div  className="lang px-2 border-start border-end d-flex gap-2 align-items-center">
            <i  className="fa fa-globe"></i>
            <p  className="mb-0">English</p>
            <i  className="fa fa-chevron-down"></i>
        </div>
        <div  className="lang px-2 border-start border-end d-flex gap-2 align-items-center">
            <p  className="mb-0">Currency</p>
            <i  className="fa fa-chevron-down"></i>
        </div>
    </div>
    <div  className="big-header d-flex justify-content-between align-items-center">
        <div  className="logo">
            <img src={LogoImgage} alt="Logo" className="logoimage "/>
        </div>
        <nav  className="text-center align-items-center">
            <ul>
                <li><NavLink  to="/" className="navlinks">HOME</NavLink></li>
                <li><NavLink  to="/offer" className="navlinks">OFFER</NavLink></li>
                <li><NavLink  to="/saved" className="navlinks">SAVED</NavLink></li>
                <li><NavLink  to="/usemap" className="navlinks">USE MAP</NavLink></li>
                <li><NavLink  to="/contact"  className="navlinks">CONTACT US</NavLink></li>
            </ul>
        </nav>
        {props.user.UserId ?(<form
            onSubmit={(e) => e.preventDefault()} 
            className="search-form-primary">
            <div className="search-form-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                />
            </div>
        </form>): null}
            {props.user.UserId ? (<Link to="/profile" className="profilelinks text-decoration-none" ><div className="prof d-flex align-items-center ">
            <BsPersonCircle  className="profileimag" />
            <h5>Profile</h5>
        </div></Link>)
            :  (<button  className="btnloginLink d-none d-md-block ms-5 align-items-center">
            <Link  className="btnlinklogin text-decoration-none  " to="/login" >Sign Up</Link></button>)}
        <div  className="burger d-block d-lg-none">
            <BiMenuAltRight  className="fa fa-list-alt fs-3"/>
            <BiMenuAltLeft  className="fa fa-close fs-3"/>
        </div>
    </div>
    </>
)
}
export default Navbar
