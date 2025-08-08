import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css'

function FormPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login =() => {
        if (username == "kishan" && password == "1234") {
            // window.location.href = "/Form2";
            // alert("login in successfull.")
            navigate('/form2');
        } else {
            alert("Enter valid User Name and Password");
        }
    }


    return (
        <>
            <div className="FormContainer">
                <h3>Login</h3>
                <input type="text" id="user" placeholder="User name" value= {username} onChange={(e)=>setUsername(e.target.value)} />
                <input type="password" name="" id="pass" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" onClick={login}>Submit</button>
            </div>
        </>
    )
}

export default FormPage;




