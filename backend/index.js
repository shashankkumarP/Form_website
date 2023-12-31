const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

const mongoose = require("mongoose");
const User_router = require("./src/router/User");
const Form_router = require("./src/router/Form");
const MongoURL = process.env.MONGO_URL;
const PORT = process.env.PORT;
app.use(express.json())


app.use("/user",User_router );
app.use("/form",Form_router)


app.get("/", async (req, res) => {
  
  return res.send({ message: "hello" });
});

app.listen(PORT || "8080", async () => { 

  await mongoose.connect(`${MongoURL}`) 

  console.log("listening");

});



