import React from "react"
import { Link } from "react-router-dom";
import "./Whatsapp.css"
// import FormPage from './FormPage'

function Whatsapp() {

    function phone(){
        alert("You can connect either call or whatsapp: 9024535138")
    }

    return (
        <>
            {/* <nav> */}
                {/* <Link to="/FormPage" > */}
                    <img className="logo" id="whatsapp" src="/whatsapp.png" alt="mylogo" onClick={phone} />
                {/* </Link> */}

                {/* <input type="text" placeholder="Enter Name" /> */}
            {/* </nav> */}
        
        </>
    )
}

export default Whatsapp;