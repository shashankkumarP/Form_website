const express = require("express");
const FormController = require("../controller/Formcontroller");
const { Formmiddleware } = require("./middleware/Formmiddleware");
const Form_router = express.Router();
const multer = require('multer')



Form_router.get('/',Formmiddleware,FormController.getData);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the directory to save uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage });
  Form_router.post('/',upload.array('files', 3),FormController.postData);

module.exports=Form_router;