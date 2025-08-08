// import { useEffect } from "react";
import "./Table.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Table() {

    useEffect(() => {
        const text = "Transaction Details";
        const outputElement = document.getElementById("title");
        let index = 0;

        if (!outputElement) return; // 🛑 Avoid null errors

        const interval = setInterval(() => {
            outputElement.textContent += text[index];
            index++;
            if (index === text.length) {
                index = 0;
                outputElement.textContent = "";
            }
        }, 200);

        return () => clearInterval(interval); // 🔄 cleanup on unmount
    }, []);






    const [rows, setRows] = useState([]);

    useEffect(() => {
        loadRows();
    }, []);


    const loadRows = async () => {
        try {
            const { data } = await axios.get("/api/transactions");
            setRows(data);
        } catch (err) {
            console.error(err);
            alert('Data load nahi huaa');
        }
    }



    return (
        <>

            <div className="heading">
                <p id="title" ></p>
            </div>

            <div className="container">
                <table border="1" cellPadding="10" cellSpacing="0" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Name</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(r => (
                            <tr key={r.id} >
                                <td>{r.id}</td>
                                <td>{r.amount}</td>
                                <td>{r.name}</td>
                                <td>{r.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Table;