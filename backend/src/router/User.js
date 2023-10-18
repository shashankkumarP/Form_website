const express = require("express");
const User_router = express.Router();
const UserController = require('../controller/Usercontroller')



User_router.post('/login',UserController.login);
User_router.post('/register',UserController.register);

module.exports=User_router;