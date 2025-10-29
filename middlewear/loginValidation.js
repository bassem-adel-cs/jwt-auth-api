const Ajv = require("ajv");
const ajvErrors = require("ajv-errors");
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      errorMessage: {
        type: "الإيميل لازم يكون نص",
      }
    },
password:{
  type:"string",
}
  },
  required: ["email","password"],
  additionalProperties: false,
  errorMessage: {
    required: {
      email: "الإيميل مطلوب",
      password:"كلمة السر مطلوبه",
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

