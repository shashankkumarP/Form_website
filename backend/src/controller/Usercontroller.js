const { GenerateSalt, GeneratePassword, ValidatePassword ,Generatetoken,isEmailValid} = require('../utils');
const UserModel = require('../model/UserSchema');
require('dotenv').config();




const UserController = {
    login: async(req,res)=>{
       
        
        let {email,password} = req.body;
        console.log('email',req.body)
        if(!isEmailValid(email)){
            res.status(400).send({"message":"Invalid Email"});
        }
        try{
            let user = await UserModel.findOne({"Email":email});
            console.log(user);
            if(!user){
                return res.status(401).send({"message":"Invalid Credentials"});
            }
            let Validate = await ValidatePassword(password,user.Password,user.salt);
            console.log(Validate);
            if(Validate){ 
                const token = await Generatetoken(email,password)
               return res.status(200).send({"message":"Login Successful","token":token})
            }
            
            return res.status(401).send({"message":"Invalid Credentials"});




        }catch(e){
            console.log(e);
            return res.status(500).send({"message":"Something Went Wrong"})

        }

    },

    register: async(req,res)=>{

        let {Name,Email,Password} = req.body;
        const salt = await GenerateSalt()
        Password = await GeneratePassword(Password,salt);
        
        console.log(salt,Password,Email,Name)
        try{
            console.log({...req.body,salt})
            let user = new  UserModel({"UserName":Name,"Email":Email,"Password":Password,"salt":salt})
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