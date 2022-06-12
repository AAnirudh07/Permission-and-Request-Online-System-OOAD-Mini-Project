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
  password: "123Washington!!",
  database: "pros_db",
});

app.post('/register', (req, res) => {
    
  const username = req.body.username;
  const password = req.body.password;
  const userAppName = req.body.userAppName;
  const profilePhoto = req.body.profilePhoto;
  const userType = req.body.userType;

  db.query(
  "INSERT INTO users (username, password, userAppName, profilePhoto, userType) VALUES (?,?,?,?,?)", 
  [username, password, userAppName, profilePhoto, userType], 
  (err, result) => {
      if(err) {
        //console.log(err);
        res.send({message:err.code});
    }
    else {
        res.send({message:"Success! Enter EMAIL ID and password to login!"});
    }

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


app.post('/req1', (req, res) => {
    
  const name = req.body.uname;
  const phno = req.body.uphno;
  const emailID = req.body.uemailID;
  const year = req.body.uyear;
  const reason = req.body.ureason;
  const fdate = req.body.ufdate;
  const tdate = req.body.utdate;
  const letter = req.body.letter;
  const dep = req.body.udep;

  db.query(
  "INSERT INTO hostelleave (name, phno, emailID, year, reason, dep, fdate, tdate, letter) VALUES (?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, fdate, tdate, letter], 
  (err, result) => {
    if(err) {  
      res.send({message: "Please make sure you have filled in the correct details! You have either have an outstanding request or have not filled out the fields properly!"});
    }
    else {
      res.send({message: "Success!"});
    }
  });

});

app.post('/get1', (req,res) => {
  const name = req.body.username;
  db.query(
    "SELECT * FROM hostelleave WHERE name = ?",
    [name],
    (err, result) => {
      console.log(res);
      if(result.length>0) {
        res.send({message:"Pending!"});
      }
      else {
        res.send({message:"You have not made any recent request!"});
      }
    }
  )
});

app.post('/res1', (req, res) => {

  db.query(
  "SELECT * FROM hostelleave", 
  (err, result) => {
      if(err) {
        res.send({err:err});
      }
      else{
        res.send(result);
      }
  });

});

app.post("/clean1", (req,res) => {

  db.query(
    "DELETE FROM hostelleave where decision is NULL",
    (err,result) => {
      console.log(err);
      res.send({message:"Complete!"})      
    });
});

app.post('/req2', (req, res) => {
    
  const name = req.body.uname;
  const phno = req.body.uphno;
  const emailID = req.body.uemailID;
  const year = req.body.uyear;
  const reason = req.body.ureason;
  const dep = req.body.udep;
  const tdate = req.body.utdate;
  const time = req.body.utime;
  const letter = req.body.letter;

  db.query(
  "INSERT INTO earlyleave (name, phno, emailID, year, reason, dep, tdate, time, letter) VALUES (?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, time, letter], 
  (err, result) => {
    if(err) {  
      res.send({message: "Please make sure you have filled in the correct details! You have either have an outstanding request or have not filled out the fields properly!"});
    }
    else {
      res.send({message: "Success!"});
    }
  });

});


app.post('/get2', (req,res) => {
  const name = req.body.username;
  db.query(
    "SELECT * FROM earlyleave WHERE name = ?",
    [name],
    (err, result) => {
      console.log(res);
      if(result.length>0) {
        res.send({message:"Pending!"});
      }
      else {
        res.send({message:"You have not made any recent request!"});
      }
    }
  )
});

app.post('/res2', (req, res) => {

  db.query(
  "SELECT * FROM earlyleave", 
  (err, result) => {
      if(err) {
        res.send({err:err});
      }
      else{
        res.send(result);
      }
  });

});

app.post("/clean2", (req,res) => {

  db.query(
    "DELETE FROM earlyleave where decision is NULL",
    (err,result) => {
      console.log(err);
      res.send({message:"Complete!"})      
    });
});

app.post('/req3', (req, res) => {
    
  const name = req.body.uname;
  const phno = req.body.uphno;
  const emailID = req.body.uemailID;
  const year = req.body.uyear;
  const reason = req.body.ureason;
  const dep = req.body.udep;
  const tdate = req.body.utdate;
  const ftime = req.body.uftime;
  const ttime = req.body.uttime;
  const letter = req.body.letter;

  db.query(
  "INSERT INTO onduty (name, phno, emailID, year, reason, dep, tdate, ftime, ttime, letter) VALUES (?,?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, ftime, ttime, letter], 
  (err, result) => {
    if(err) {  
      res.send({message: "Please make sure you have filled in the correct details! You have either have an outstanding request or have not filled out the fields properly!"});
    }
    else {
      res.send({message: "Success!"});
    }
  });
});

app.post('/get3', (req,res) => {
  const name = req.body.username;
  db.query(
    "SELECT * FROM onduty WHERE name = ?",
    [name],
    (err, result) => {
      console.log(res);
      if(result.length>0) {
        res.send({message:"Pending!"});
      }
      else {
        res.send({message:"You have not made any recent request!"});
      }
    }
  )
});

app.post('/res3', (req, res) => {

  db.query(
  "SELECT * FROM onduty", 
  (err, result) => {
      if(err) {
        res.send({err:err});
      }
      else{
        res.send(result);
      }
  });

});

app.post("/clean3", (req,res) => {

  db.query(
    "DELETE FROM onduty where decision is NULL",
    (err,result) => {
      console.log(err);
      res.send({message:"Complete!"})      
    });
});


app.post('/req4', (req, res) => {

  const name = req.body.uname;
  const phno = req.body.uphno;
  const emailID = req.body.uemailID;
  const year = req.body.uyear;
  const reason = req.body.ureason;
  const dep = req.body.udep;
  const tdate = req.body.utdate;
  const time = req.body.utime;
  const letter = req.body.udocuments;

  db.query(
  "INSERT INTO reqdoc (name, phno, emailID, year, reason, dep, tdate, time, letter) VALUES (?,?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, tdate, time, letter], 
  (err, result) => {
    if(err) {  
      res.send({message: "Please make sure you have filled in the correct details! You have either have an outstanding request or have not filled out the fields properly!"});
    }
    else {
      res.send({message: "Success!"});
    }
  });

});

app.post('/get4', (req,res) => {
  const name = req.body.username;
  db.query(
    "SELECT * FROM reqdoc WHERE name = ?",
    [name],
    (err, result) => {
      console.log(res);
      if(result.length>0) {
        res.send({message:"Pending!"});
      }
      else {
        res.send({message:"You have not made any recent request!"});
      }
    }
  )
});


app.post('/res4', (req, res) => {

  db.query(
  "SELECT * FROM reqdoc", 
  (err, result) => {
      if(err) {
        res.send({err:err});
      }
      else{
        res.send(result);
      }
  });

});

app.post("/clean4", (req,res) => {

  db.query(
    "DELETE FROM reqdoc where decision is NULL",
    (err,result) => {
      console.log(err);
      res.send({message:"Complete!"})      
    });
});

app.post('/req5', (req, res) => {

  const name = req.body.uname;
  const phno = req.body.uphno;
  const emailID = req.body.uemailID;
  const year = req.body.uyear;
  const reason = req.body.ureason;
  const dep = req.body.udep;
  const femail = req.body.ufemailID;
  const letter = req.body.letter;

  db.query(
  "INSERT INTO otherreq (name, phno, emailID, year, reason, dep, femail, letter) VALUES (?,?,?,?,?,?,?,?)", 
  [name, phno, emailID, year, reason, dep, femail, letter], 
  (err, result) => {
    if(err) {  
      res.send({message: "Please make sure you have filled in the correct details! You have either have an outstanding request or have not filled out the fields properly!"});
    }
    else {
      res.send({message: "Success!"});
    }
  });

});

app.post('/get5', (req,res) => {
  const name = req.body.username;
  db.query(
    "SELECT * FROM otherreq WHERE name = ?",
    [name],
    (err, result) => {
      console.log(res);
      if(result.length>0) {
        res.send({message:"Pending!"});
      }
      else {
        res.send({message:"You have not made any recent request!"});
      }
    }
  )
});


app.post('/res5', (req, res) => {

  db.query(
  "SELECT * FROM otherreq", 
  (err, result) => {
      if(err) {
        res.send({err:err});
      }
      else{
        res.send(result);
      }
  });

});

app.post("/clean5", (req,res) => {

  db.query(
    "DELETE FROM otherreq where decision is NULL",
    (err,result) => {
      console.log(err);
      res.send({message:"Complete!"})      
    });
});


app.listen(3001, () => {
  console.log("server running on port 3001");
});