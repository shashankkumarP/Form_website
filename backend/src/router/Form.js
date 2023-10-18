const express = require("express");
const FormController = require("../controller/Formcontroller");
const { Formmiddleware } = require("./middleware/Formmiddleware");
const Form_router = express.Router();



Form_router.post('/',Formmiddleware,FormController.postData);
Form_router.get('/',Formmiddleware,FormController.getData);

module.exports=Form_router;