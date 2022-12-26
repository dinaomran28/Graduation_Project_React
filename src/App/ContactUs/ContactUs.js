import React, { useState ,useRef} from 'react'
import axios from 'axios';
import "./ContactUs.css"
function ContactUs() {
    const NameRef = useRef(null);
    const EmailRef = useRef(null);
    const TextRef = useRef(null);
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Text,setText]=useState("");
    const SendSupport=async(e)=>{
        e.preventDefault();
        const dataSend={
            name: Name,
            email: Email,
            message: Text
    };
        await axios.post("https://bakr-app.herokuapp.com/api/support" ,dataSend)
        .then(res =>{
            if(res.data.status){
                alert(res.data.message);
            }
            else{
                alert(res.data.message +"  please try again");
            }
            NameRef.current.value='';
            EmailRef.current.value='';
            TextRef.current.value='';
        })
        .catch(err => alert(err.message));
    }
return (
    <>
    <div className="contact-body">
    <div className="text-contact">Contact us</div>
    <div className="container-contact">
    <div className="group-text">
            <div className="text-container1">Get In Touch With Us</div>
            <div className="text-container2">Let us know what you think .</div>
            </div>
        <form className="form-contact" onSubmit={SendSupport}>
        <div className="form-row">
            <div className="input-contact">
                <input ref={NameRef} type="text" required onChange={e=>setName(e.target.value)}/>
                <div className="underline"></div>
                <label htmlFor="">Name</label>
            </div>
            <div class="input-contact">
                <input  ref={EmailRef}type="text" required onChange={e=>setEmail(e.target.value)} />
                <div class="underline"></div>
                <label htmlFor="">Email Address</label>
            </div>
        </div>
        <div class="form-row">
            <div class="input-contact textarea">
                <textarea  ref={TextRef}rows="8" cols="80" required onChange={e=>setText(e.target.value)} ></textarea>
                <br />
                <div class="underline"></div>
                <label htmlFor="">Write your message</label>
                <br />
                <div className="form-row submit-btn">
                    <div className="input-contact">
                    <div className="inner"></div>
                    <input type="submit" value="submit"/>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
    </div>
    <div className="Footer-contact">
        
    </div>
    </>
)
}

export default ContactUs
