const registUsers = require("../model/loginModel");
const bcrypt = require("bcrypt");
const asynchandler=require("../middlewear/asynchandler")

const registcontroller =asynchandler(async function(req, res,next) {
  const{name,email,password}=req.body;
  const user=await registUsers.findOne({email:email});
  if(!user){
    const hashpassword=await bcrypt.hash(password,10)
    const newuser=new registUsers({
name,
email,
password:hashpassword,
    })
await newuser.save();
return res.status(201).json({status:"success",data:{user:newuser}})
  }
res.status(400).json({status:"fail",data:{message:"this email already regist"}})
})



module.exports = registcontroller;
