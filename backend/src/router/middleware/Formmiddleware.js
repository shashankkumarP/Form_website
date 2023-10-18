const jwt = require("jsonwebtoken")
require('dotenv').config()

module.exports.Formmiddleware = async (req,res,next)=>{
    
         const authHeader = req.header('Authorization');

        // if (authHeader && authHeader.startsWith('Bearer ')) {
        //     const token = authHeader.split(" ")[1];
        //     if(!token){
        //         return res.status(403).send({error:true , message:"Token is not provided"})

        //     }
        //     jwt.verify(token, process.env.secretKey, (err, decoded) => {
        //         if (err) {
        //           return res.status(403).json({ message: 'Failed to authenticate token' });
        //         }
        //         console.log(decoded);
        //         next();
        //       });
        // }
        // else{
        //     return res.status(401).json({ message: 'Unauthorized' });
        // }
        next();
      
        
        
     

} 