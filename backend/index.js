const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const mysql = require('mysql');

    app.use(morgan('tiny'));

    app.use(cors());

    app.use(express.json());


    const port = process.env.PORT || 3000;

    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    });

    connection.connect((err) => {
        if(err) throw err;
        console.log("Connected to database");
    });

    app.post('/login', (req,res) => {
        const credentials = req.body;
        try{
            connection.query('SELECT * FROM user_login WHERE username = ? AND password = ?',
            [credentials.email, credentials.password],
            (err, results) => {

                if(err){
                    res.status(500).json({message: 'Couldnt connect to the database', err})
                }

                if(results.length === 1){
                    const token = jwt.sign(
                        {username: credentials.email},
                        process.env.JWT_TOKEN
                    )
                    res.status(200).json(
                        {
                        message: 'Login Successful',
                        token: token, 
                        username: credentials.email
                        }
                    )
                }else{
                    res.status(401).json({message: 'Invalid Credentials'})
                }
            })
        
        }catch(e){
            res.status(500).json({message: 'InternalServer Error'}, e)
        }
    });

    app.post('/register', (req,res) => {
        
        const credentials = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();

        try{
            const checkCreds = 'Select * FROM user_login WHERE username = ?'
            connection.query(checkCreds, [credentials.username], (err, results) => {
                if(err) throw err;

                if(results.length > 0) {
                    return res.status(400).json({message: 'Username already exists'});
                }

                else{

                const sql = `INSERT INTO  user_login 
                    (username, password, email, fullname, createdAt, updatedAt)
                    VALUES
                    (?, ?, ?, ?, ?, ?)`;
                connection.query(sql,[
                    credentials.username, 
                    credentials.password, 
                    credentials.email, 
                    credentials.fullname,
                    createdAt, 
                    updatedAt],
                    (err, results) => {
                        if(err) throw err;
                        res.status(200).json({message: "Account created successfully", 'data': results});
                    })
                }
            })
        }catch(e){
            res.status(500).json({message: "Error in creating account"});
        }
    })


app.listen(port, function(){
    console.log(`Listening on ${port}!!!`);
})