import React, { useEffect ,useState} from 'react'
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Hotels.css";
// import Pic1 from "./image/ELsala_ala_Elnabi_pic1.jpg"
// import Pic2 from "./image/ELsala_ala_Elnabi_pic2.jpg"
// import Pic3 from "./image/ELsala_ala_Elnabi_pic3.jpg"
// import Pic4 from "./image/ELsala_ala_Elnabi_pic4.jpg"
// import Pic5 from "./image/ELsala_ala_Elnabi_pic5.jpg"
// import Pic6 from "./image/ELsala_ala_Elnabi_pic6.jpg"
// import Pic7 from "./image/ELsala_ala_Elnabi_pic7.jpg"
// import Pic8 from "./image/ELsala_ala_Elnabi_pic8.jpg"
// import Menu1 from "./image/ELsala_ala_Elnabi_Menu1.jpg"
// import Menu2 from "./image/ELsala_ala_Elnabi_Menu2.jpg"
// import Menu3 from "./image/ELsala_ala_Elnabi_Menu3.jpg"
// import Menu4 from "./image/ELsala_ala_Elnabi_Menu4.jpg"
// import Menu5 from "./image/ELsala_ala_Elnabi_Menu5.jpg"
// import Menu6 from "./image/ELsala_ala_Elnabi_Menu6.jpg"
// import Menu7 from "./image/ELsala_ala_Elnabi_Menu7.jpg"
import LogoImgage from "../images/logo.jpg"
import userDefulat from "../images/user.png"
import { AiOutlineClose } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import axios from 'axios';
function Hotels() {
    const[ResturantData ,setResturantDate]=useState({
        Rate : "",
        Inwishlist:"",
        Pic:[],
        Menu:[],
        NameResturant:"",
        Address:"",
        Worktime:"",
        Cuisinetype :"",
        Lat:"",
        Lng:"",
        City:"",
        Offer:[],
        Idresturant :""
});
const [Rating,setRating]= useState(null)
const [hoverStar,sethoverStar]= useState(null)
const[Fav ,setFav]= useState(null)
const [Pic,setPic]= useState({})
const [comments,setcomments] =useState({})
useEffect(()=>{
    async function fetchData() {
        await axios.get("https://bakr-app.herokuapp.com/api/restaurant/getRestaurantById/621c0a04195e6d8faff61e1c").then(res=>{
            if(res.status){
                setResturantDate({
                    Rate : res.data.data.rate,
                    Pic:[res.data.data.pic],
                    Inwishlist:res.data.data.inWishList,
                    Menu:[res.data.data.menu],
                    NameResturant:res.data.data.name,
                    Address:res.data.data.address,
                    Worktime:res.data.data.workTime,
                    Cuisinetype :res.data.data.cuisineType,
                    Lat:res.data.data.lat,
                    Lng:res.data.data.lng,
                    City:res.data.data.city.name,
                    Offer:[res.data.data.offer],
                    Idresturant :res.data.data.id
                })
                if(ResturantData.Inwishlist){
                    setFav(true);
                }
                setPic(ResturantData.Pic[0])
                // const data = ResturantData.Pic.map((el,idx )=>{
                //     console.log(idx)
                //     console.log(el[idx])
                // })
                }
        })
        .catch(err=>{
            console.log(err)
        })
        await axios.get("https://bakr-app.herokuapp.com/api/restaurant/comments/621c0bad195e6d8faff61e1f")
        .then(res=>{
            if(res.status){
                setcomments(res.data.data)
            }
            }
            
        )
        .catch(err=>{
            console.log(err.message);
        })
        }
        fetchData();
        var offerBtn = document.querySelector(".offer-btn")
        let closeIcon = document.querySelector(".Iconclose")
        // if(ResturantData.Offer.length>1)
        // {
            offerBtn.addEventListener("click", () => {
                document.querySelector(".modal-qr").classList.add("showQr")
            })
            closeIcon.addEventListener("click", () => {
                document.querySelector(".modal-qr").classList.remove("showQr")
            })
    },[ResturantData.Inwishlist, ResturantData.Offer.length, ResturantData.Pic, comments]) 
    var settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
            cssEase: "linear",
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
            cssEase: "linear",
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2500,
            cssEase: "linear",
            }
        }
        ]
    };
    const Number=[1,2,3,4,5];
    const DataRate={
        rate : Rating,
        userId : ""
    }
    const addFavorite=async()=>{
            if(ResturantData.Inwishlist){
            await axios.delete("https://bakr-app.herokuapp.com/api/user/Wishlist",ResturantData.Idresturant).
            then(res=>{
                console.log(res.data)
                setFav(false);
            })
        }
        else{
            await axios.post("https://bakr-app.herokuapp.com/api/user/wishlist/Restaurant/6267556c55930c35f8601820",ResturantData.Idresturant)
            .then(res=>{
                setFav(true);
                console.log(res.data)
        })
            }
    }
    // const Picture=[
    //     {src:Pic1},
    //     {src:Pic2},
    //     {src:Pic3},
    //     {src:Pic4},
    //     {src:Pic5},
    //     {src:Pic6},
    //     {src:Pic7},
    //     {src:Pic8},
    // ]
    // const Menu=[
    //     {src:Menu1},
    //     {src:Menu2},
    //     {src:Menu3},
    //     {src:Menu4},
    //     {src:Menu5},
    //     {src:Menu6},
    //     {src:Menu7}
    // ]
return (
<>
<div className="offer">
        <div className="container-restaurant">
            <div className="offer-box-one d-flex gap-3 pb-5 ">
                <div className="offer-box-img">
                    <img src={"./"} alt="Resturant_Img" />
                </div>
                <div className="d-flex flex-column gap-2 justify-content-center">
                    <div className="offer-box-content">
                        <h5>{ResturantData.NameResturant}</h5>
                        <small className="d-block">{ResturantData.Address}.</small>
                        <small className="d-block">{ResturantData.City}.</small>
                    </div>
                    <div className="offer-links d-flex ">
                        <ul className="d-flex gap-2 align-items-center">
                            <li><BsFillHeartFill className="icon-heart" onClick={addFavorite} color={Fav ? "#FFC64B" : "#fff"}/></li>
                            <li><Link className='icon-location' style={{color: 'white' , fontSize:"30px" }} to="/usemap"><VscLocation style={{cursor:"pointer"}}/></Link></li>
                            <li>{ResturantData.Rate}</li>
                            {
                                [...Array(5)].map((star , i) =>{
                                    const ratingValue = i+1;
                                    return(
                                        <label key={i}>
                                            <input type="radio" className="btn-star" name="rating" value={ratingValue}
                                            onClick={()=>{
                                                setRating(ratingValue);
                                                axios.post("https://bakr-app.herokuapp.com/api/hotels/review/628404e4e042d00016bf36a1",DataRate)
                                                .then(res=>alert(res.data +"Thanks for Rating"))
                                                .catch(err=>alert(err.data +" Check your data and try again"))
                                            }}/>
                                            <AiFillStar className="star" color={ratingValue <= ( hoverStar || Rating) ? "#FFC64B" : "#e4e5e9" } 
                                            onMouseEnter={()=>sethoverStar(ratingValue)}
                                            onMouseLeave={()=>sethoverStar(null)}
                                            />
                                        </label>
                                    )
                                })
                            }
                        </ul>
                        {/* {ResturantData.Offer.length>1 ? ( */}
                        <button type="button" className="offer-btn"><i className="fa fa-gift"></i> GET OFFER</button>
                        {/* ):null} */}
                    </div>
                </div>
            </div>
            {/* <div className="offer-about py-3 pb-5">
                <h3 className="mb-3 ms-5">#Picture</h3>
                    <Slider {...settings}>
                    {Picture.map((el ,ixd)=>{
                            return (
                                <div className="item" key={ixd}>
                                <img  src={el.src} alt="Resturant_Img" />
                            </div>
                            )
                        })} 
                    </Slider>
            </div>
            <div className="offer-about py-3 pb-5">
                <h3 className="mb-3 ms-5">#Menu</h3>
                <Slider {...settings}>
                        {Menu.map((el,idx)=>{
                            return (
                                <div className="item" key={idx}>
                                <img src={el.src}alt="Resturant_Img" />
                            </div>
                            )
                        })}
                    </Slider>
            </div> */}
            <div className="text py-5">
                <p><b>Resturant_Name : </b>{ResturantData.NameResturant} <br/> <b> Address : </b>{ResturantData.Address} </p>
                <p><b>City : </b>{ResturantData.City} <br/> <b>Cuisinetype : </b>{ResturantData.Cuisinetype}</p>
                <p><b>Worktime : </b>{ResturantData.Worktime} <br/> <b>OFFer :</b>  {ResturantData.Offer.length>1 ? "Find the Best Offer" : "Not Found Any Offer"}</p>
            </div>
            <div className="comments ">
                <h3 className="position-relative main-title">COMMENTS</h3>
                <Slider {...settings}>
                        {Number.map((el)=>{
                            return (
                                <div className="item" key={el}>
                                <div className="test   d-flex gap-2 py-4 px-3 rounded-3">
                                    <i className="fa fa-comment-o fs-2"></i>
                                    <div className="test-content d-flex flex-column gap-3">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae
                                            laudantium, nobis explicabo quam nihil ipsa aperiam deleniti, labore quas velit eum
                                            harum? Laudantium totam amet soluta </p>
                                        <div className="test-info d-flex gap-2">
                                            <img src={userDefulat} alt="" />
                                            <div className="test-text">
                                                <h6 className="mb-0">Osama Mady</h6>
                                                <span>Front-End Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </Slider>
                <h3 className="position-relative main-title my-5 ">LEAVE REPLAY</h3>
                <h2>Your email address will not be published <br/> Required fields are marked</h2>
                <h5 className="mt-4 mb-3">Comment</h5>
                <textarea rows="10"></textarea>
                <h5 className="mt-4 mb-3">Name</h5>
                <input type="text" className="form-control py-3"/>
                <h5 className="mt-4 mb-3">Email</h5>
                <input type="email" className="form-control py-3"/>
                <input type="checkbox" id="commentcheck" className="mt-4"/>
                <label htmlFor="commentcheck" className="me-2">Save my name , email , and website in this broswer for next time
                    I comment</label>
                <button type="button"  className="comments-submit">Post Comment</button>
            </div>
        </div>
    </div>
    <div className="modal-qr d-flex  justify-content-center align-items-center ">
        <div className="bg-light  modalQr-body d-flex flex-column justify-content-center align-items-center position-relative">
            <span><img src={LogoImgage} alt="Logo" className="logoBrcode "/></span>
            <AiOutlineClose className="Iconclose"/>
            <h4>Scan QR-Code and get offer</h4>
            <h2>20% Offer</h2>
            <img src="img//qr.PNG" alt="" />
            <button type="button">SUBMIT</button>
            <p>May b later</p>
        </div>
    </div>
</>
)
}

export default Hotels
