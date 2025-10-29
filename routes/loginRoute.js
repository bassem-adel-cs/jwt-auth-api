const express=require("express");
const route=express.Router();
const loginvalidation=require("../middlewear/loginvalidation");
const registvalidation=require("../middlewear/registValidation")
const control=require("../controller/logincontroller")
const registcontroller=require("../controller/registcontroller")
 route.get("/users",control.getallusers);
 route.post("/login",loginvalidation,control.checkloginusers)
 route.post("/regist",registvalidation,registcontroller)
 module.exports=route