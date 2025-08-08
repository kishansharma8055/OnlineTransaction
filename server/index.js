// server/index.js
import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

//mysql connertion
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',         //change if different
    password: 'Kishan@123',         // set your MySQL password
    database: 'transaction_db'
});

db.connect(err => {
    if (err) {
        console.error('DB connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});


// get all transaction
app.get('/api/transactions', (req, res) => {
    db.query('select * from transactions order by id desc', (err, results) => {
        if (err){
            console.error('Fetch error', err);
             return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});


// insert a new transaction
app.post('/api/transactions', (req, res) => {
    const { amount, name, total } = req.body;
    db.query(
        'INSERT INTO transactions (amount, name, total) VALUES (?,?,?)',
        [amount, name, total],
        (err, result) => {
            if (err){
                console.error('insert error:', err);
                 return res.status(500).json({ error: err });
            }
            res.status(201).json({ id: result.inserted, amount, name, total });
        }
    );
});



app.listen(3000, () => console.log("API running on http://localhost:3000"));
