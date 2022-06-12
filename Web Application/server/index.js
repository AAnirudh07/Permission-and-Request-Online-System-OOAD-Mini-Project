const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

//parse the inputs from the front-end
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "pros_db",
});

app.post('/req1', (req, res) => {
    
  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const fdate = req.ufdate;
  const tdate = req.utdate;
  const letter = req.letter;

  db.query(
  "INSERT INTO hostelleave (name, phno, emailID, year, reason, fdate, tdate, letter) VALUES (?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, fdate, tdate, letter], 
  (err, result) => {
      console.log(err);
  });

});


app.post('/req1', (req, res) => {
    
  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const fdate = req.ufdate;
  const tdate = req.utdate;
  const letter = req.letter;

  db.query(
  "INSERT INTO hostelleave (name, phno, emailID, year, reason, fdate, tdate, letter) VALUES (?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, fdate, tdate, letter], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/res1', (req, res) => {
    
  const name = req.uname;
  const decision=req.decision;

  db.query(
  "INSERT INTO hostelleave (decision) VALUES (?) where name = ?", 
  [decision, name], 
  (err, result) => {
      console.log(err);
  });

});



app.post('/req2', (req, res) => {
    
  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const dep = req.udep;
  const tdate = req.utdate;
  const time = req.utime;
  const letter = req.letter;

  db.query(
  "INSERT INTO earlyleave (name, phno, emailID, year, reason, dep, tdate, time, letter) VALUES (?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, time, letter], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/res2', (req, res) => {
    
  const name = req.uname;
  const decision=req.decision;

  db.query(
  "INSERT INTO earlyleave (decision) VALUES (?) where name = ?", 
  [decision, name], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/req3', (req, res) => {
    
  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const dep = req.udep;
  const tdate = req.utdate;
  const ftime = req.uftime;
  const ttime = req.uttime;
  const letter = req.letter;

  db.query(
  "INSERT INTO onduty (name, phno, emailID, year, reason, dep, tdate, ftime, ttime, letter) VALUES (?,?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, ftime, ttime, letter], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/res3', (req, res) => {
    
  const name = req.uname;
  const decision=req.decision;

  db.query(
  "INSERT INTO onduty (decision) VALUES (?) where name = ?", 
  [decision, name], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/req4', (req, res) => {

  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const dep = req.udep;
  const tdate = req.utdate;
  const time = req.utime;
  const letter = req.udocuments;

  db.query(
  "INSERT INTO reqdoc (name, phno, emailID, year, reason, dep, tdate, time, letter) VALUES (?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, time, letter], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/res4', (req, res) => {
    
  const name = req.uname;
  const decision=req.decision;

  db.query(
  "INSERT INTO reqdoc (decision) VALUES (?) where name = ?", 
  [decision, name], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/req5', (req, res) => {

  const name = req.uname;
  const phno = req.uphno;
  const emailID = req.uemailID;
  const year = req.uyear;
  const reason = req.ureason;
  const dep = req.udep;
  const femail = req.ufemail;
  const letter = req.letter;

  db.query(
  "INSERT INTO otherreq (name, phno, emailID, year, reason, dep, femail, letter) VALUES (?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, femail, letter], 
  (err, result) => {
      console.log(err);
  });

});

app.post('/res5', (req, res) => {
    
  const name = req.uname;
  const decision=req.decision;

  db.query(
  "INSERT INTO otherreq (decision) VALUES (?) where name = ?", 
  [decision, name], 
  (err, result) => {
      console.log(err);
  });

});


app.listen(3001, () => {
  console.log("server running on port 3001");
});