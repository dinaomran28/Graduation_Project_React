import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import imglocation from "../images/location.png"
import Envatologo from "../images/envato-logo.svg"
import Meetlogo from "../images/Google Meet.svg"
import TrelloLogo from "../images/Trello-Logo.wine.svg"
import GuideImg from "../images/guide-bg.jpeg"
import offerImg from "../images/offer-image.png"
import LogoImgage from "../images/logo.jpg"
import "./LandingPage.modules.css"
// import axios from 'axios';
function LandingPage(){
    // useEffect(()=>{
    //                 // Go up Button
    //                 let goUp = document.querySelector(".goUp")
    //                 window.addEventListener("scroll", () => {
    //                     if (window.pageYOffset > 400) {
    //                         goUp.classList.add("active")
    //                     }
    //                     else {
    //                         goUp.classList.remove("active")
    //                     }
    //                 })
    //                 goUp.onclick = () => {
    //                     window.scrollTo(0, 0)
    //                 }
    // })
        return (
            <div >
            <div className="home-withoutlogin">
            <div className="home">
                <div className="home-content col-md-9">
                    <div className="container d-flex flex-column gap-3">
                        <div className="content-header d-flex align-items-center gap-2">
                            <i className="bi bi-globe fs-5"></i>
                            <h3 className="mb-0">E-GUIDE</h3>
                        </div>
                        <div className="content-text">
                            <h2>Explore all the best places <br/> Let us be a part of your <br/> journey.
                                <br/> <br/> lets's start signin up <br/> or log in if you have an <br/> account
                            </h2>
                        </div>
                        <div className="content-btn d-flex gap-3 ">
                            <Link to="/login" style={{textDecoration:"none"}}><button className="main-btn signup">Sign Up</button></Link>
                            <Link to="/login" style={{textDecoration:"none"}}><button className="main-btn login-btn">Login in</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    <div className="guide">
        <div className="row">
                <div className="guide-content">
                    <div className="row">
                        <div className="col-md-7 pe-0">
                            <div className="guide-text d-flex align-items-center justify-content-center m flex-column gap-4">
                                <img src={imglocation} alt="" className="guide-img"/>
                                <h3>it's always easy to use !</h3>
                                <p className="mt-3">just search a place and get all <br/> information about it , <br/> you can
                                    also use our map to reach <br/> your goals easily.</p>
                            </div>
                        </div>
                        <div className="col-md-5 ps-0 position-relative">
                            <img src={GuideImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className="offer-section">
                <div className="offer-content ">
                        <div className="col-md-7 pe-0">
                            <div className="offer-text  align-items-center flex-column gap-1">
                                <p className="special-text  fs-7">SPECIAL</p>
                                <div className=" offers col-md-10 pe-0 d-flex align-items-center">
                                    <p className="offers-text ">OFFERS</p>
                                    <p className="align-items-right">
                                    <img src={offerImg} alt="" className="img-offer"/>
                                    </p>
                                    </div>
                                <p className="mb-2">
                                There are many variations of offers available to our users , explore 
                                <br/>it on your own and benefit from the best discounts offered by
                                <br/> many of our restaurants, hotels and others .<br/>
                                <br/>Do not forget to give your assessment of the places that you visit
                                <br/> through us and give them your opinion on your experience with
                                <br/> them to improve and benefit others .
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
    <div className="safe">
        <div className="row">
                <div className="safe-content">
                    <h2 className="mb-3 text-center">Safe &amp; Convenient Transactions</h2>
                    <p className=" text-center">we provide the best service for you so you can can be comfortable with us
                    </p>
                    <div className="safe-boxes mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box-content p-4 d-flex align-items-center gap-4">
                                    <div className="box-img">
                                        <i className="bi bi-shield-check"></i>
                                    </div>
                                    <div className="box-content-text d-flex flex-column justify-content-center">
                                        <h5 className="">
                                            Security guaranteed
                                        </h5>
                                        <p className="lead mb-0">We provide and guarantee 100% security with a money
                                            <br/>back
                                            guarantee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-content p-4 d-flex align-items-center gap-4">
                                    <div className="box-img">
                                        <i className="bi bi-hand-index-thumb"></i>
                                    </div>
                                    <div className="box-content-text">
                                        <h5 className="mb-2">
                                            Easy to use
                                        </h5>
                                        <p className="lead">Convenience for transactions,sending money, buying<br/>credit,
                                            and paying bills.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-content p-4 d-flex align-items-center gap-4">
                                    <div className="box-img">
                                        <i className="bi bi-alarm"></i>
                                    </div>
                                    <div className="box-content-text">
                                        <h5 className="mb-2">
                                            Always free to use
                                        </h5>
                                        <p className="lead">You will get free trial period of all access.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box-content p-4 d-flex align-items-center gap-4">
                                    <div className="box-img">
                                        <i className="bi bi-currency-exchange"></i>
                                    </div>
                                    <div className="box-content-text">
                                        <h5 className="mb-2">
                                            No hidden fees
                                        </h5>
                                        <p className="lead">We are built with world className technology with a <br/> network
                                            system that is monitared 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <div className="partners">
        <div className="row">
                <div className="partners-content text-center mb-1"> 
                    <h2 className="fs-2 mb-4">Our Partners</h2>
                    <span className="lead">Trusted by thousands of origanization across the global</span>
                    <div
                        className="partners-boxes d-flex gap-3 px-5 align-items-center justify-content-center flex-column flex-md-row mb-5 mb-md-0">
                        <div className="box-one d-flex align-items-center d-flex align-items-center gap-2">
                            <img src="https://aem.dropbox.com/cms/etc.clientlibs/settings/wcm/designs/dropbox-birch-help/clientlib-all/resources/40.svg"
                                alt=""/>
                            <h3>Dropbox</h3>
                        </div>
                        <div className="d-flex flex-md-column gap-3 flex-row">
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                                    alt=""/>
                                <h3>Slack</h3>
                            </div>
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src={Envatologo} alt=""/>
                                <h3>envato</h3>
                            </div>
                        </div>
                        <div className="d-flex flex-md-column gap-3 flex-row">
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src={TrelloLogo} alt="" className="mx-auto" style={{width: "100px"}}/>
                            </div>
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src={Meetlogo} alt=""/>
                                <h3>Meet</h3>
                            </div>
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <h3 className="fw-bold mx-auto fs-3">Forbes</h3>
                            </div>
                        </div>
                        <div className="d-flex flex-md-column gap-3 flex-row">
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src="https://www.qorusdocs.com/hubfs/geekwire.svg" alt="" className="mx-auto"
                                    style={{width: "100px"}}/>
                            </div>
                            <div className="box-one d-flex align-items-center d-flex gap-2">
                                <img src="https://aem.dropbox.com/cms/etc.clientlibs/settings/wcm/designs/dropbox-birch-help/clientlib-all/resources/40.svg"
                                    alt=""/>
                                <h3>Dropbox</h3>
                            </div>
                        </div>
                        <div className="box-one d-flex align-items-center d-flex gap-2">
                            <img src="https://aem.dropbox.com/cms/etc.clientlibs/settings/wcm/designs/dropbox-birch-help/clientlib-all/resources/40.svg"
                                alt=""/>
                            <h3>Dropbox</h3>
                        </div>
                    </div>
                </div>
        </div> 
        </div>
    </div>
    <div className="footer-body">
            <footer className="py-3 px-5 my-1">
                <div
                    className="container d-flex justify-content-between align-items-center flex-md-row flex-column gap-3 gap-md-0">
                    <div className="copy-right">Copyright &copy; 2020. All right reversed</div>
                    <div className="footer-nav py-2 px-3">
                        <ul className="list-unstyled mb-0">
                            <li className="d-inline-block">
                                <a className="text-decoration-none px-3" href="/">Home</a>
                            </li>
                            <li className="d-inline-block">
                                <a className="text-decoration-none px-3" href="/">About</a>
                            </li>
                            <li className="d-inline-block">
                                <a className="text-decoration-none px-3" href="/">Careers</a>
                            </li>
                            <li className="d-inline-block">
                                <a className="text-decoration-none px-3" href="/">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer-social mb-0">
                        <li className="d-inline-block">
                            <a href="/">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a href="/">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <a href="/">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
            </div>
            </div>
    )}
export default LandingPage;