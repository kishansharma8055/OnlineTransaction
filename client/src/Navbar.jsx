import React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"
import FormPage from './FormPage'

function Navbar() {

    // useEffect(() => {
    //     const text = "Transaction Details";
    //     const outputElement = document.getElementById("title");
    //     let index = 0;

    //     if (!outputElement) return; // 🛑 Avoid null errors

    //     const interval = setInterval(() => {
    //         outputElement.textContent += text[index];
    //         index++;
    //         if (index === text.length) {
    //             index = 0;
    //             outputElement.textContent = "";
    //         }
    //     }, 200);

    //     return () => clearInterval(interval); // 🔄 cleanup on unmount
    // }, []);



    function Login() {

    }

    return (
        <>
            <nav>
                <Link to="/FormPage" >
                    <img className="logo" src="/logo.avif" alt="mylogo" />
                </Link>

                <input type="text" placeholder="Enter Name" />
            </nav>
           
        </>
    )
}

export default Navbar;