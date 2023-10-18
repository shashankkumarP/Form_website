// models/Form.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  size: Number,
});

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone:String,
  dateOfSubmission:{type:String,default:Date.now()},
  files: [fileSchema],
});

const FormModel = mongoose.model('form', formSchema);

module.exports = FormModel;
