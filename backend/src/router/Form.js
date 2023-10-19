const express = require("express");
const FormController = require("../controller/Formcontroller");
const { Formmiddleware } = require("./middleware/Formmiddleware");
const Form_router = express.Router();
const multer = require('multer')



Form_router.get('/',Formmiddleware,FormController.getData);

// try{
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
      
//       cb(null, __dirname +"../../uploads");
//     },
//     filename: (req, file, cb) => {
      
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); 
//       cb(null, uniqueSuffix + '-' + file.originalname); 
//     },
//   }); 
//   const upload = multer({ storage });
  
//   // Form_router.post('/',upload.fields([{name:"files0"},{name:"files1"},{name:"files2"}]),FormController.postData);
  
// }catch(e){
//   console.log(e);
// }

Form_router.post('/',FormController.postData);

module.exports=Form_router;