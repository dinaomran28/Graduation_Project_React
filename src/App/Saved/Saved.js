import React, { useEffect, useState, useRef } from 'react'
import "./Saved.css"
import { Link, useNavigate, matchPath } from 'react-router-dom'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.css"
import userDefulat from "../images/user.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { GiModernCity } from "react-icons/gi"
import { AiFillEnvironment } from "react-icons/ai"
import { AiOutlineMenuFold } from "react-icons/ai"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { AiFillCaretDown } from "react-icons/ai"
import { IoRestaurantOutline } from "react-icons/io5"
import { BiPyramid } from "react-icons/bi"
import { FaHotel } from "react-icons/fa"
import { IoCafeSharp } from "react-icons/io5"
import { FcSportsMode } from "react-icons/fc"
// import { useEffect } from 'react';
function Saved(props) {
    const [activemenu, setactivemenu] = useState(false);
    const [activecity, setactivecity] = useState(false);
    const [activeresturant, setactiveresturant] = useState(false);
    const [activeplaces, setactiveplaces] = useState(false);
    const [activecafes, setactivecafes] = useState(false);
    const [activehotel, setactivehotel] = useState(false);
    const [activeclub, setactiveclub] = useState(false)
    const [CitiesData, setCitiesData] = useState([]);
    const [ResturantData, setResturantData] = useState([]);
    const [CafesData, setCafesData] = useState([]);
    const [CulbesData, setCulbesData] = useState([]);
    const [PlacesData, setPlacesData] = useState([]);
    const [HotelsData, setHotelsData] = useState([]);
    const [ResturantDataSaved, setResturantDataSaved] = useState([]);
    const [CafesDataSaved, setCafesDataSaved] = useState([]);
    const [CulbesDataSaved, setCulbesDataSaved] = useState([]);
    const [PlacesDataSaved, setPlacesDataSaved] = useState([]);
    const [HotelsDataSaved, setHotelsDataSaved] = useState([]);
    let navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // const [singlePic,setsinglePic] = useState([]);
    const ref = useRef(null);
    useEffect(() => {
        console.log(props.userId)
        let listTransform = document.querySelectorAll(".list-transform li")
        let boxes = document.querySelectorAll(".boxes")
        listTransform.forEach((e) => {
            e.addEventListener("click", () => {
                document.querySelector(".list-transform li.active").classList.remove("active")
                e.classList.add("active")
                document.querySelector(".boxes.active").classList.remove("active")
                boxes.forEach((box) => {
                    box.classList.add("noactive")
                })
                document.querySelector("." + e.dataset.type).classList.add("active")
                document.querySelector("." + e.dataset.type).classList.remove("noactive")
            })

        })
        if (props.userId) {
            axios.get(`https://bakr-app.herokuapp.com/api/user/wishlist/${props.userId}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.length > 0) {
                        setPlacesDataSaved(res.data.data.TouristPlace)
                        setCafesDataSaved(res.data.data.Cafes)
                        setResturantDataSaved(res.data.data.Restaurants)
                        setHotelsDataSaved(res.data.data.Hotels)
                        setCulbesDataSaved(res.data.data.club)
                    }
                    alert("NO Find your Favorite Places")
                })
                .catch(err => { console.log(err) })
        }

        // ///////////////// Get Home Page //////

        //         axios.get("https://bakr-app.herokuapp.com/api/home")
        //         .then(res => {
        //             if(res.status){
        //                 setHomeData({
        //                     Cafes: [res.data.data.Cafes],
        //                     Hotels:[res.data.data.Hotels],
        //                     Restaurants:[res.data.data.Restaurants],
        //                     TouristPlace:[res.data.data.TouristPlace],
        //                     Club:[res.data.data.club]
        //                 })
        //             }
        //         })
    })
    const ChangeClassMenu = () => {

        if (activemenu) {
            setactivemenu(false);
        }
        else {
            setactivemenu(true);
        }
    }
    /////// get all City //////
    const disappercity = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/city/getCities")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setCitiesData(res.data.data)
                }
            })
        setactivecity(true); setactiveclub(false); setactivecafes(false); setactivehotel(false); setactiveresturant(false); setactiveplaces(false);
    }
    ///////// get all Resturant //////////

    const disapperRestursnt = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/restaurant/getRestaurants")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setResturantData(res.data.data)
                }
                console.log(ResturantData)
            })
        setactivecity(false); setactiveclub(false); setactivecafes(false); setactivehotel(false); setactiveresturant(true); setactiveplaces(false);
    }
    ///////// get all Places /////////
    const disapperplaces = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/tourist/getAllTouristPlaces")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setPlacesData(res.data.data)
                }
                console.log(PlacesData)
            })
        setactivecity(false); setactiveclub(false); setactivecafes(false); setactivehotel(false); setactiveresturant(false); setactiveplaces(true);
    }
    ///////// get all Clubes //////////

    const disapperclubes = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/clubs/getAllClubs")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setCulbesData(res.data.data)
                }
                console.log(CulbesData)
            })
        setactivecity(false); setactiveclub(true); setactivecafes(false); setactivehotel(false); setactiveresturant(false); setactiveplaces(false);
    }
    ///////// get all Hotels //////////

    const disapperhotel = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/hotels/getAllHotels")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setHotelsData(res.data.data)
                }
                console.log(HotelsData)
            })
        setactivecity(false); setactiveclub(false); setactivecafes(false); setactivehotel(true); setactiveresturant(false); setactiveplaces(false);
    }
    ///////// get all Cafes //////////

    const disappercafe = async () => {
        await axios.get("https://bakr-app.herokuapp.com/api/cafe/getCafes")
            .then(res => {
                if (res.data.data.length !== 0) {
                    setCafesData(res.data.data)
                }
                console.log(CafesData)
            })
        setactivecity(false); setactiveclub(false); setactivecafes(true); setactivehotel(false); setactiveresturant(false); setactiveplaces(false);
    }
    ///////transform to City Page ////////
    const TransportCity = event => {
        if (event.currentTarget.id) {
            // navigate("/city" ,{state:{Idcity:event.currentTarget.id}})
            const CityId = event.currentTarget.id
            const match = matchPath.match(`/city/${event.currentTarget.id}`, {
                path: `/city/:${CityId}`,
                exact: true,
                strict: false
            });
        }
    };
    ///////transform to Reasturant Page ////////
    const TransportResturant = event => {
        console.log(event.currentTarget.id);

        console.log(ref.current.id);
    };
    ///////transform to Place Page ////////
    const TransportPlace = event => {
        console.log(event.currentTarget.id);

        console.log(ref.current.id);
    };
    ///////transform to Cafe Page ////////
    const TransportCafe = event => {
        console.log(event.currentTarget.id);

        console.log(ref.current.id);
    };
    ///////transform to Hotel Page ////////
    const TransportHotel = event => {
        console.log(event.currentTarget.id);

        console.log(ref.current.id);
    };
    ///////transform to Clube Page ////////
    const TransportClube = event => {
        console.log(event.currentTarget.id);

        console.log(ref.current.id);
    };
    return (
        <>

            <div className="Home-page">
                <div className="head-page">
                    <h1 className="Title-head">SAVED</h1>
                    <p>TRAVEL &amp; EXPLORE EGYPT</p>
                </div>
                <div className="map-part">
                    <button className="Btnoption-list"><AiFillEnvironment className="icon-located" /><Link className="link-map" to="/usemap">USE MAP</Link></button>
                    <div className="option-list">
                        <div className="general-list">
                            <div className="general-list">
                                <div className='Btnoption-Menu' onClick={ChangeClassMenu}>{!activemenu ? (<AiOutlineMenuFold className="Menu-iconApper" />) : (<AiOutlineMenuUnfold className="Menu-iconApper" />)}</div>
                                <ul className={activemenu ? null : "hidden"}>
                                    <li>
                                        <div className="Btnoption-list" onClick={disappercity}><GiModernCity className="option-icon" /><p className="option-title">Cities <AiFillCaretDown className='icondrop' /></p>
                                        </div>
                                        {/* <div className="city-getting">
                        {CitiesData&&CitiesData.map(city =>{
                            return (
                                <ul className="list-get">
                                <li ref={ref} id={city.id} onClick={handleClick}>{city.name}</li>
                                </ul>
                            )
                        })}
                        </div> */}
                                    </li>
                                    <li>
                                        <div className="Btnoption-list" onClick={disapperRestursnt}><IoRestaurantOutline className="option-icon" /><p className="option-title">Resturants <AiFillCaretDown className='icondrop' /> </p></div>
                                    </li>
                                    <li>
                                        <div className="Btnoption-list" onClick={disapperplaces}><BiPyramid className="option-icon" /><p className="option-title">Tourist Places <AiFillCaretDown className='icondrop' /> </p></div>
                                    </li>
                                    <li>
                                        <div className="Btnoption-list" onClick={disapperclubes}><FcSportsMode className="option-icon" /><p className="option-title">Clubs <AiFillCaretDown className='icondrop' /></p></div>
                                    </li>
                                    <li>
                                        <div className="Btnoption-list" onClick={disapperhotel}><FaHotel className="option-icon" /><p className="option-title">Hotles <AiFillCaretDown className='icondrop' /></p></div>
                                    </li>
                                    <li>
                                        <div className="Btnoption-list" onClick={disappercafe}><IoCafeSharp className="option-icon" /><p className="option-title">Cafes <AiFillCaretDown className='icondrop' /></p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="data-backup">
                            <div className={activecity ? "city-getting" : "hidden"}>
                                <h3>All Cities</h3>
                                {CitiesData && CitiesData.map(city => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={city.id} onClick={TransportCity}>
                                                <>
                                                    <img src={city.pic} alt='imag' />
                                                    <p><b>Name : </b>{city.name}</p>
                                                    <p><b>Area : </b>{city.area}</p>
                                                    <p>More info...{">>>"}</p>
                                                </>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className={activeresturant ? "city-getting" : "hidden"}>
                                <h3>All Resturants</h3>
                                {ResturantData && ResturantData.map(res => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={res.id} onClick={TransportResturant}><>
                                                <img src={res.pic} alt='imag' />
                                                <p> <b>Name : </b>{res.name}</p>
                                                <p><b>Rate : </b>{res.rate}</p>
                                                <p>More info...{">>>"}</p>
                                            </></li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className={activeplaces ? "city-getting" : "hidden"}>
                                <h3>All Tourist Places</h3>
                                {PlacesData && PlacesData.map(res => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={res.id} onClick={TransportPlace}>
                                                <>
                                                    <p> <b>Name : </b>{res.name}</p>
                                                    <p> <b>City : </b>{res.city.name}</p>
                                                    <p><b>Rate : </b>{res.rate}</p>
                                                    <p>More info...{">>>"}</p>
                                                </>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className={activeclub ? "city-getting" : "hidden"}>
                                <h3>All Clubes</h3>
                                {CulbesData && CulbesData.map(res => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={res.id} onClick={TransportClube}>
                                                <>
                                                    <p> <b>Name : </b>{res.name}</p>
                                                    <p> <b>City : </b>{res.city.name}</p>
                                                    <p><b>Rate : </b>{res.rate}</p>
                                                    <p>More info...{">>>"}</p>
                                                </>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className={activehotel ? "city-getting" : "hidden"}>
                                <h3>All Hotels</h3>
                                {HotelsData && HotelsData.map(res => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={res.id} onClick={TransportHotel}>
                                                <>
                                                    <p> <b>Name : </b>{res.name}</p>
                                                    <p> <b>City : </b>{res.city.name}</p>
                                                    <div className="displey-price">
                                                        <p><b>singlePrice : </b>{res.singlePrice}</p>
                                                        <p><b>doublePrice : </b>{res.doublePrice}</p>
                                                    </div>
                                                    <p><b>Rate : </b>{res.rate}</p>
                                                    <p>More info...{">>>"}</p>
                                                </>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className={activecafes ? "city-getting" : "hidden"}>
                                <h3>All Cafes</h3>
                                {CafesData && CafesData.map(res => {
                                    return (
                                        <ul className="list-get">
                                            <li ref={ref} id={res.id} onClick={TransportCafe}>
                                                <>

                                                    <p> <b>Name : </b>{res.name}</p>
                                                    <p> <b>City : </b>{res.city.name}</p>
                                                    <p><b>Rate : </b>{res.rate}</p>
                                                    <p>More info...{">>>"}</p>
                                                </>
                                            </li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommended-part">
                    <section className="dest">
                        <div className="container">
                            <div className="head-page">
                                <h1 className="Title-head mb-5">Recommended Destination</h1>
                            </div>
                            <ul className="list-unstyled text-center list-transform mb-5">
                                <li className="d-inline-block active me-4" data-type="tourist">The Touristic Places</li>
                                <li className="d-inline-block me-4" data-type="resturant">The Resturant And Cafe</li>
                                <li className="d-inline-block me-4" data-type="transport">Hotles</li>
                                <li className="d-inline-block me-4" data-type="club">Clubs</li>
                            </ul>
                            <div className="boxes tourist active justify-content-between align-items-center flex-row flex-wrap">
                                {PlacesDataSaved.map((res, idx) => {
                                    return (
                                        <div key={idx} className="box p-3 shadow-sm" id={res.id}>
                                            <Slider {...settings} className="img-fluid">
                                                {/* <img src={res.pic} className="img-fluid" alt="Imag"/> */}
                                            </Slider>
                                            <h5 className="fs-5 mt-2"><b>Name : </b>{res.name}</h5>
                                            <p> <b>Description :</b>{res.description}</p>
                                            <div className="box-footer d-flex justify-content-between align-items-center">
                                                <h6 className="fs-6 mb-0"><b>City :</b>{res.city.name}</h6>
                                                <span>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    {res.rate}
                                                </span>
                                            </div>
                                            <div
                                                className="box-content text-light fs-3 d-flex justify-content-center align-items-center gap-2 flex-column">
                                                <Link to="/usemap" className="link-usemap">
                                                    <div>
                                                        <AiFillEnvironment className="option-icon" />
                                                        Location
                                                    </div>
                                                </Link>
                                                <div>
                                                    <i className="bi bi-heart-fill"></i>
                                                    Saved
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="boxes resturant noactive  justify-content-between align-items-center flex-row flex-wrap">
                                {ResturantDataSaved && ResturantDataSaved.map((res, idx) => {
                                    return (
                                        <div key={idx} className="box p-3 shadow-sm" id={res.id}>
                                            {/* <img src={res.pic} className="img-fluid" alt="Imag"/> */}
                                            <h5 className="fs-5 mt-2"><b>Name : </b>{res.name}</h5>
                                            <h6><b>Address :</b>{res.address}</h6>
                                            <h6> <b>CuisineType :</b>{res.cuisineType}</h6>
                                            <h6> <b>WorkTime :</b>{res.workTime}</h6>
                                            <div className="box-footer d-flex justify-content-between align-items-center">
                                                <h6 className="fs-6 mb-0"><b>City :</b> {res.city.name}</h6>
                                                <span>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    {res.rate}
                                                </span>
                                            </div>
                                            <div
                                                className="box-content text-light fs-3 d-flex justify-content-center align-items-center gap-2 flex-column">
                                                <Link to="/usemap" className="link-usemap">
                                                    <div>
                                                        <AiFillEnvironment className="option-icon" />
                                                        Location
                                                    </div>
                                                </Link>
                                                <div>
                                                    <i className="bi bi-heart-fill"></i>
                                                    Saved
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {CafesDataSaved && CafesDataSaved.map((res, idx) => {
                                    return (
                                        <div key={idx} className="box p-3 shadow-sm" id={res.id}>
                                            {/* <img src={res.pic} className="img-fluid" alt="Imag"/> */}
                                            <h5 className="fs-5 mt-2"><b>Name : </b>{res.name}</h5>
                                            <h6><b>Address :</b>{res.address}</h6>
                                            <h6> <b>CuisineType :</b>{res.cuisineType}</h6>
                                            <h6> <b>WorkTime :</b>{res.workTime}</h6>
                                            <div className="box-footer d-flex justify-content-between align-items-center">
                                                <h6 className="fs-6 mb-0"><b>City :</b> {res.city.name}</h6>
                                                <span>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    {res.rate}
                                                </span>
                                            </div>
                                            <div
                                                className="box-content text-light fs-3 d-flex justify-content-center align-items-center gap-2 flex-column">
                                                <Link to="/usemap" className="link-usemap">
                                                    <div>
                                                        <AiFillEnvironment className="option-icon" />
                                                        Location
                                                    </div>
                                                </Link>
                                                <div>
                                                    <i className="bi bi-heart-fill"></i>
                                                    Saved
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="boxes transport noactive  justify-content-between align-items-center flex-row flex-wrap">
                                {HotelsDataSaved && HotelsDataSaved.map((res, idx) => {
                                    return (
                                        <div key={idx} className="box p-3 shadow-sm" id={res.id}>
                                            {/* <img src={res.pic} className="img-fluid" alt="Imag"/> */}
                                            <h5 className="fs-5 mt-2"><b>Name : </b>{res.name}</h5>
                                            <h6><b>Address :</b>{res.address}</h6>
                                            <h6> <b>Rooms Numbers :</b>{res.roomsNumbers}</h6>
                                            <h6> <b>Single Price :</b>{res.singlePrice}</h6>
                                            <h6> <b>Double Price :</b>{res.doublePrice}</h6>
                                            <div className="box-footer d-flex justify-content-between align-items-center">
                                                <h6 className="fs-6 mb-0"><b>City :</b> {res.city.name}</h6>
                                                <span>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    {res.rate}
                                                </span>
                                            </div>
                                            <div
                                                className="box-content text-light fs-3 d-flex justify-content-center align-items-center gap-2 flex-column">
                                                <Link to="/usemap" className="link-usemap">
                                                    <div>
                                                        <AiFillEnvironment className="option-icon" />
                                                        Location
                                                    </div>
                                                </Link>
                                                <div>
                                                    <i className="bi bi-heart-fill"></i>
                                                    Saved
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="boxes club noactive  justify-content-between align-items-center flex-row flex-wrap">
                                {CulbesDataSaved && CulbesDataSaved.map((res, idx) => {
                                    return (
                                        <div key={idx} className="box p-3 shadow-sm" id={res.id}>
                                            {/* <img src={res.pic} className="img-fluid" alt="Imag"/> */}
                                            <h5 className="fs-5 mt-2"><b>Name : </b>{res.name}</h5>
                                            <h6><b>Address :</b>{res.address}</h6>
                                            <h6> <b>Price :</b>{res.price}</h6>
                                            <h6> <b>WorkTime :</b>{res.workTime}</h6>
                                            <div className="box-footer d-flex justify-content-between align-items-center">
                                                <h6 className="fs-6 mb-0"><b>City :</b> {res.city.name}</h6>
                                                <span>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    {res.rate}
                                                </span>
                                            </div>
                                            <div
                                                className="box-content text-light fs-3 d-flex justify-content-center align-items-center gap-2 flex-column">
                                                <Link to="/usemap" className="link-usemap">
                                                    <div>
                                                        <AiFillEnvironment className="option-icon" />
                                                        Location
                                                    </div>
                                                </Link>
                                                <div>
                                                    <i className="bi bi-heart-fill"></i>
                                                    Saved
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <ul className="list-unstyled list-numbers text-center mt-5 position-relative">
                                <li className="d-inline-block">1</li>
                                <li className="d-inline-block">2</li>
                                <li className="d-inline-block active">3</li>
                                <li className="d-inline-block">4</li>
                                <li className="d-inline-block">5</li>
                                <li className="d-inline-block">6</li>
                            </ul>
                        </div>
                    </section>
                </div>
                <div className="comments ">
                    <div className="head-page">
                        <h1 className="Title-head m-5">COMMENTS</h1>
                    </div>
                    <div className="item d-flex align-center justify-content-between">
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
                                    </div>
                                </div>

                            </div>
                        </div>
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
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="head-page">
                        <h1 className="Title-head m-5">LEAVE REPLAY</h1>
                    </div>
                    <h2>Your email address will not be published <br /> Required fields are marked</h2>
                    <h5 className="mt-4 mb-3">Comment</h5>
                    <textarea rows="10"></textarea>
                    <h5 className="mt-4 mb-3">Name</h5>
                    <input type="text" className="form-control py-3" />
                    <h5 className="mt-4 mb-3">Email</h5>
                    <input type="email" className="form-control py-3" />
                    <input type="checkbox" id="commentcheck" className="mt-4" />
                    <label htmlFor="commentcheck" className="me-2">Save my name , email , and website in this broswer for next time
                        I comment</label>
                    <button type="button" className="comments-submit">Post Comment</button>
                </div>
            </div>


        </>
    )
}
export default Saved
