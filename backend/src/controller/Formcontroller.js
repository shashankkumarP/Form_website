require('dotenv').config();
const FormModel = require("../model/FormSchema")


const FormController = {
    getData: async(req,res)=>{
        try{
            const data= await FormModel.find({});
            if(data){
                return res.status(200).send({"message":"Got the data","data":data})
            }
            return res.status(401).send({"message":"No Data Available"})
            
        }catch(e){
            return res.status(500).send({'message':"Something Went Wrong"})
        }

    },
    postData: async(req,res)=>{
        let {Name,Age,Email} = req.body;

        try{
            let form = new FormModel.create({"Name":Name,"Email":Email,"Age":Age});
            await form.save();
            return res.status(201).send({"message":"Data saved sucessfully"})
        }catch(e){
            return res.status(500).send({'message':"Something Went Wrong"})

        }
        

    }
}

module.exports=FormController