const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY
const emailValidator = require('deep-email-validator');

module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt();
  };

 module.exports.GeneratePassword= async(password,salt)=>{
    return bcrypt.hash(password,salt)
}
module.exports.ValidatePassword = async (
  enteredPassword,
  savedPassword, 
  salt
) => {
  
  return (await this.GeneratePassword(enteredPassword, salt)) === savedPassword;
};


module.exports.isEmailValid= async (email) =>{
  return emailValidator.validate(email)
}
module.exports.Generatetoken = async(email,password)=>{
  return  jwt.sign({email,password},SECRET_KEY,{expiresIn:"24h"})
}