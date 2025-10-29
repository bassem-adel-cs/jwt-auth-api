const Ajv = require("ajv");
const ajvErrors = require("ajv-errors");
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const schema = {
  type: "object",
  properties: {
  name:{
        type:"string",
         errorMessage: {
        type: "the name should be string",
      }
    },
    email: {
      type: "string",
      errorMessage: {
        type: "the email should be string",
      }
    },
password:{
  type:"string",
}
  },
  required: ["name","email","password"],
  additionalProperties: false,
  errorMessage: {
    required: {
      name:"name required",
      email: "email required",
      password:"password required",
    }
  }
};

const validate = ajv.compile(schema);
module.exports=function(req,res,next){
const valid=validate(req.body);
if(!valid){
return res.status(400).json({status:"fail",message:validate.errors.map(e => e.message)
})
}
next();
}

