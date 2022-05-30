const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

//parse the inputs from the front-end
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123Washington!!",
    database: "pros_db"
});


app.post('/register', (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    const userAppName = req.body.userAppName;
    const profilePhoto = req.body.profilePhoto;
    db.query(
    "INSERT INTO users (username, password, userAppName, profilePhoto) VALUES (?,?,?,?)", 
    [username, password, userAppName, profilePhoto], 
    (err, result) => {
        console.log(err);
    });

});


app.post("/login", (req, res) => {
    
    const username = req.body.username;
    const password = req.body.password;
    db.query(
    "SELECT * FROM users where username = ? AND password = ?", 
    [username, password], 
    (err, result) => {
        
        if(err) {
            //console.log(err);
            res.send({err:err});
        }
        if (result.length > 0) {
            res.send(result);
        }
        else {
            res.send({message:"Wrong Username & Password Combination"});
        }
    });

});


app.listen(3001, () => {
    console.log("server running on port 3001");
});