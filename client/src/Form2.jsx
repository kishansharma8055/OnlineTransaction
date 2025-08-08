import { useState } from "react";
import axios from 'axios';

function Form2(){

    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [total, setTotal] = useState('');

    async function handleSubmit(){
        if(!amount || !name || !total) return alert("Fill every field");

        try{
            await axios.post("/api/transactions", {amount, name, total});
            setAmount("");
            setName("");
            setTotal("");

            alert("Data save successfully!");
        }catch(err){
            // console.error(err);
            alert("Something Wrong.");
        }
    }


    return (
        <>
          <div className="FormContainer">
                <h3>Insert New Detail</h3>

                <input type="number" id="user" placeholder="Amount" value= {amount} onChange={(e)=>setAmount(e.target.value)} />

                <input type="text" name="" id="pass" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />

                <input type="number" name="" id="pass" placeholder="Total" value={total} onChange={(e)=>setTotal(e.target.value)} />

                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Form2;