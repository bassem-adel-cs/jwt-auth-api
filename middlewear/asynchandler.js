module.exports=function asynchandler(fn){
return async function(req,res,next){
try{
    await fn(req,res)
}
catch(err){
    next(err)
}}}
