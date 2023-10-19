// models/Form.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: {type:String},
  phone:String,
  dateOfSubmission:{type:String,default:Date.now()}
},{
  strict:false
});

const FormModel = mongoose.model('form', formSchema);

module.exports = FormModel;
