import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from "./App/Home/Home"
import Login from './App/Login/Login';
import Forget from './App/Forget/Forget';
import SendEmail from './App/SendEmail/SendEmail';
import Reset from './App/Reset/Reset';
import PasswordUpdate from './App/passwordUpdate/PasswordUpdate';
import Profile from "./App/profile/profile"
import Offer from "./App/Offer/Offer"
import Saved from "./App/Saved/Saved"
import Navbar from './App/Navbar/Navbar';
import Resturant from './App/Resturant/Resturant';
import Cafe from './App/Cafe/Cafe';
import Club from './App/Clubs/Clubs';
import Hotel from './App/Hotels/Hotels';
import Tourist from './App/Tourist_Places/Tourist';
import ContactUs from './App/ContactUs/ContactUs';
import City from "./App/Cities/Cities";
import UseMap from './App/UseMap/UseMap.js';

function App() {
  let location = useLocation();
  const [UserDate, setUserData] = useState({});
  useEffect(() => {
    if (location.state) {
      setUserData({
        UserName: location.state.Name,
        UserId: location.state.Id,
        UserEmail: location.state.Email,
        UserToken: location.state.Token
      })
      localStorage.setItem("UserDate", JSON.stringify(UserDate))
    }
  }, [UserDate, location.state])
  return (
    <div>

      <Navbar user={UserDate} />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/offer' element={<Offer user={UserDate} />} />
        <Route exact path='/saved' element={<Saved userId={UserDate.UserId} />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/forget' element={<Forget />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/resturant' element={<Resturant user={UserDate} />} />
        <Route exact path='/cafe' element={<Cafe user={UserDate} />} />
        <Route exact path='/city' element={<City user={UserDate} />} />
        <Route exact path='/club' element={< Club user={UserDate} />} />
        <Route exact path='/hotel' element={< Hotel user={UserDate} />} />
        <Route exact path='/tourist' element={<Tourist user={UserDate} />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/passwordupdate' element={<PasswordUpdate />} />
        <Route exact path='/sendemail' element={<SendEmail />} />
        <Route exact path='/profile' element={<Profile user={UserDate} />} />
        <Route exact path='/usemap' element={<UseMap />} />

      </Routes>
    </div>
  )
}
export default (App);
