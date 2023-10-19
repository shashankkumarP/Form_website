require('dotenv').config();
const FormModel = require("../model/FormSchema")
const multer = require('multer');

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
      try {
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const age = req.body.age;
        const files = req.files;
        console.log(email, phone, name,);
        
        const existingForm = await FormModel.findOne({ email }); 
        if (existingForm) {
          return res.status(400).json({ error: 'Email already exists' });
        }
       const values = Object.values(files);
        const savedForm = await FormModel.create({
          name,
          email,
          phone,
          age
        });
      
        res.status(200).json(savedForm);
      } catch (error) {
        console.error('Form upload error:', error);
        res.status(500).json({ error: 'Form upload failed' });
      }
      
        
        

    }
}

module.exports=FormController