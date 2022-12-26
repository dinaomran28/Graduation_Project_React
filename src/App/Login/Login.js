import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Instimage from "../images/instagram.png"
import Twiterimage from "../images/twiter.png"
import "./Login.css"
import PasswordRegex from './PasswordRegex';
function Login() {
    let navigate = useNavigate({});
    const [usernameRegister, setUsernameRegister] = useState('');
    const [EmailRegister, setEmailRegister] = useState('');
    const [PasswordRegister, setPasswordRegister] = useState('');
    const [EmailLogin, setEmailLogin] = useState('');
    const [PasswordLogin, setPasswordLogin] = useState('');
    const [PassRegex, setPassRegex] = useState(false);
    const [Checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        passLengthCheck: false,
        specialCharCheck: false,
    })
    const handleOnKeyUp = (e) => {
        const { value } = e.target;
        const capsLetterCheck = /[A-Z]/.test(value);
        const numberCheck = /[0-9]/.test(value);
        const passLengthCheck = value.length >= 8;
        const specialCharCheck = /[!@#$%^&*]/.test(value);
        setChecks({
            capsLetterCheck: capsLetterCheck,
            numberCheck: numberCheck,
            passLengthCheck: passLengthCheck,
            specialCharCheck: specialCharCheck,
        });
    }
    useEffect(() => {
        window.addEventListener("load", () => {
            document.getElementById("welcome").classList.add("active")
            setTimeout(() => {
                document.getElementById("welcome").classList.remove("active")
            }, 3000)
        })
        // signin and signup slider
        let buttons = document.querySelectorAll(".btn-group button")
        let forms = document.querySelectorAll("form")
        buttons.forEach((e) => {
            e.addEventListener("click", () => {
                let tpyeBtn = e.dataset.type
                document.querySelector(".btn-group button.active").classList.remove("active")
                e.classList.add("active")
                forms.forEach((form) => {
                    form.classList.remove("active")
                    form.classList.add("hidden")
                })
                document.querySelector("." + tpyeBtn).classList.add("active")
                document.querySelector("." + tpyeBtn).classList.remove("hidden")
            })
        })
    })
    const RegisterHandle = async (e) => {
        e.preventDefault()
        const dataRegister = {
            name: usernameRegister,
            email: EmailRegister,
            password: PasswordRegister
        }
        await axios.post("https://bakr-app.herokuapp.com/api/user/register", dataRegister)
            .then(response => {
                console.log(response.data);
                console.log(response.data.data.token);
                localStorage.setItem('token', response.data.data.token);
                const userdata = response.data.data;
                const Id = userdata.id;
                const Name = userdata.name;
                const Email = userdata.email;
                const Token = userdata.token;
                if (userdata) {
                    navigate("/", { state: { Id: Id, Name: Name, Email: Email, Token: Token } })
                }
            })
            .catch(err => console.log(err));
    }
    const LoginHandle = async (e) => {
        e.preventDefault();
        const dataLogin = {
            email: EmailLogin,
            password: PasswordLogin
        }
        await axios.post("https://bakr-app.herokuapp.com/api/user/login", dataLogin)
            .then(response => {
                console.log(response.data);
                console.log(response.data.data.token);
                localStorage.setItem('token', response.data.data.token);
                const userdata = response.data.data;
                const Name = userdata.name;
                const Id = userdata.id;
                const Email = userdata.email;
                const Token = userdata.token;
                if (userdata) {
                    navigate("/", { state: { Id: Id, Name: Name, Email: Email, Token: Token } })
                }
            })
            .catch((err) => {
                alert('Invalid email or password.', err);
            });
    }
    return (
        <>
            <div className="sign">
                <div className="left-box">
                    <div className="btn-group">
                        <button data-type="signup " className="active">Sign Up</button>
                        <button data-type="signin">Sign In</button>
                    </div>
                    <form onSubmit={RegisterHandle} className="signup active">
                        <div className="sign-input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter Name" required
                                onChange={e => setUsernameRegister(e.target.value)} />
                        </div>
                        <div className="sign-input">
                            <label htmlFor="email2">Email</label>
                            <input type="email" id="email2" placeholder="Enter Email" required
                                onChange={e => setEmailRegister(e.target.value)} />
                        </div>
                        <div className="sign-input">
                            <label htmlFor="password2">Password</label>
                            <input type="password" id="password2" placeholder="Enter Password" required
                                onChange={e => setPasswordRegister(e.target.value)}
                                onFocus={() => setPassRegex(true)}
                                onBlur={() => setPassRegex(false)}
                                onKeyUp={handleOnKeyUp}
                            />
                        </div>
                        {PassRegex ? (
                            <PasswordRegex
                                capsLetterFlag={Checks.capsLetterCheck ? "valid" : "invalid"}
                                numberFlag={Checks.numberCheck ? "valid" : "invalid"}
                                passLengthFlag={Checks.passLengthCheck ? "valid" : "invalid"}
                                specialCharFlag={Checks.specialCharCheck ? "valid" : "invalid"}
                            />) : null}
                        <Link className="link" to="/login">Aleardy have an account?</Link>
                        <button className="form-sign-btn" type="submit">Sign up</button>
                        <div className="social-sign">
                            <p>Or sign up with social account</p>
                            <ul>
                                <li>
                                    <Link className="link" to="/">Facebook</Link>
                                </li>
                                <li>
                                    <Link className="link" to="/"><img src={Instimage} alt="" /></Link>
                                </li>
                                <li>
                                    <Link className="link" to="/"><img src={Twiterimage} alt="" /></Link>
                                </li>
                            </ul>
                        </div>
                    </form>
                    <form onSubmit={LoginHandle} className="signin hidden">
                        <h2>Welcome back!</h2>
                        <p>Login with your data that you entered during <br />Registration</p>
                        <div className="sign-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter Email" required
                                onChange={e => setEmailLogin(e.target.value)} />
                        </div>
                        <div className="sign-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter Password" required
                                onChange={e => setPasswordLogin(e.target.value)}
                            />
                        </div>
                        <div className="forgetlink">
                            <div className="forget-box">
                                <input type="checkbox" id="remember" />
                                <label htmlFor="Remember Me" form="remember">Remember me</label>
                            </div>
                            <Link className="link" to="/forget" data-type="signin">Forget Password?</Link>
                        </div>
                        <button className="form-sign-btn" type="submit">Sign in</button>
                        <p>Protect by reCAPTCHA. Read the <Link to="/" className="privay-a">Privay Policy</Link> and <br /> <Link to="/"
                            className="privay-a">Term of Services</Link> </p>
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
                    <p>Find your favourite <br /> Place in Egypt.</p>
                </div>
            </div>
            <div className="welcome" id="welcome">
                <p>Welcome To Our Website</p>
            </div>
        </>
    )
}
export default Login
