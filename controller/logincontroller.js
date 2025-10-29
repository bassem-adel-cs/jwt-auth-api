const registUsers = require("../model/loginModel");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const asynchandler=require("../middlewear/asynchandler")
const getallusers =asynchandler(async function (req, res, next) {
    const users = await registUsers.find({},{"password":0,"__v":0});
    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ status: "fail", data:{message:"users not found"}});
    }
    res.json({ status: "success", data: { users } });
}) 

const checkloginusers = asynchandler(async function (req, res, next) {
const{email,password}=req.body;
const user=await registUsers.findOne({email:email})
if(!user){
  return res.status(400).json({status:"fail",data:{message:"email or password invalid"}})
}
const ismatch=await bcrypt.compare(password,user.password)
if(!ismatch){
    return res.status(400).json({status:"fail",data:{message:"email or password invalid"}})

}
const token=await jwt.sign({email:user.email,id:user._id},process.env.SECRET_KEY);
res.header("Authorization", "Bearer"+" "+ token);
res.status(200).json({status:"success",data:{message:"log on success"}})
})

module.exports = {
  getallusers,
  checkloginusers,
};
