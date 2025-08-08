import React from "react"
// import Navbar from "./Navbar";
import Table from "./Table";
import Whatsapp from "./Whatsapp";
// import { useEffect, useState } from "react";
// import axios from "axios";

function Home(){

    // const [rows, setRows] = useState([]);

    // useEffect(()=>{
    //     loadRows();
    // },[]);


    // async function loadRows(){
    //     try{
    //         const { data } = await axios.get("/api/transaction");
    //         setRows(data);z
    //     }catch (err){
    //         console.error(err);
    //     }
    // }



    return (
        <>
            {/* < Navbar /> */}
            < Table />
            < Whatsapp />
        </>
    )
}

export default Home;