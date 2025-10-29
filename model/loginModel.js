const mongoose=require("mongoose");
const validator=require("validator");
const Schema=new mongoose.Schema({
name:{
type:String,
required:[true,"the name is required"],

},
email:{
 type:String,
 required:[true,"the email is required"],
 unique: true,
 validate:[validator.isEmail,"the email not valid"],

},
password:{
    type:String,
    required:true,
}

})
const registUsers=mongoose.model("registUsers",Schema)
module.exports=registUsers







