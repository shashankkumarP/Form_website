const { GenerateSalt, GeneratePassword, ValidatePassword ,Generatetoken} = require('../utils');
const UserModel = require('../model/UserSchema');
require('dotenv').config();


const UserController = {
    login: async(req,res)=>{
       
        
        let {Email,Password} = req.body;

        try{
            let user = await UserModel.findOne({Email:Email});
            console.log(user);
            if(!user){
                return res.status(401).send({"message":"Invalid Credentials"});
            }
            let Validate = await ValidatePassword(Password,user.Password,user.salt);
            
            console.log(Validate);
            if(Validate){
                const token = await Generatetoken(Email,Password)
               return res.status(200).send({"message":"Login Successful","token":token})
            }
            
            return res.status(401).send({"message":"Invalid Credentials"});




        }catch(e){
            console.log(e);
            return res.status(500).send({"message":"Something Went Wrong"})

        }

    },

    register: async(req,res)=>{

        let {UserName,Email,Password} = req.body;
        const salt = await GenerateSalt()
        Password = await GeneratePassword(Password,salt);
        
        
        try{
            console.log({...req.body,salt})
            let user = new  UserModel({UserName,Email,Password,salt})
            await user.save();
            const token = await Generatetoken(Email,Password)
           res.status(201).send({"message":"User Created","token":token});
            


        }catch(e){
            
            console.log(e);
            return res.status(500).send({"message":"Something Went Wrong","error":e});

        }

    }

}

module.exports=UserController