const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName:{type:String,required:true},
    Email:{type:String,unique:true,trim: true},
    Password:{type:String, required:true},
    salt: {type:String}
})

 const UserModel = mongoose.model('user',UserSchema);
 module.exports=UserModel