const express= require("express");
const cors= require("cors");
const mongoose= require("mongoose");
const auth= require('./models/authmodel');
const app = express();
app.use(express.json());
app.use(cors());
console.log(new Date());
const uri = "mongodb+srv://root:1234@cluster0.ipiac.mongodb.net/?retryWrites=true&w=majority";
try{
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {console.log("DB CONNECTED");}
    );
}
catch(err){
    console.log(err);
}
app.post('/login',async(req,res) =>{
    const email = req.body.username;
    const password = req.body.password;
    try{
        const authentic = await auth.findOne({email: email});
        if(authentic.password===password)
        {
            console.log("Login success!");
            res.status(200).send({login: true});
        }
        else
            res.status(200).send({login: false});
    }
    catch(err){
        //console.log(err);
    }
})

app.listen(3001,()=>{
    console.log("Listening on Port 3001");
})