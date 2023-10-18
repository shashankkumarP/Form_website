const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,unique:true,trim: true},
    Age:{type:Number, required:true},
    DateField: {
        type: Date,
        default: Date.now()
      },

})
 const FormModel = mongoose.model('form',FormSchema);
module.exports=FormModel