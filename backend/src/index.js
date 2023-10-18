const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json())
const mongoose = require("mongoose");
const User_router = require("./router/User");
const Form_router = require("./router/Form");
const MongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT;


app.use("/user",User_router );
app.use("/form",Form_router)

app.get("/", async (req, res) => {
  
  return res.send({ message: "hello" });
});

app.listen(PORT || "8080", async () => { 

  await mongoose.connect(`${MongoURL}`); 
  console.log("listening");
});



