const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv").config()
const cors=require("cors")
app.use(cors())
app.use(express.json());
const router=require("./routes/loginRoute");

mongoose.connect(process.env.DB_NAME)
.then(function(){
    console.log("the connect sucess")
})
.catch(function(err){
    console.log("the error is",err)
})
app.use("/",router)

app.use(function(err,req,res,next){
    res.status(500).json({status:"error",message:err.message})
})
app.listen(process.env.port||3000,function(){
console.log("the srever port on 3000")


})