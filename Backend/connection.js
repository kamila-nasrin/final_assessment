const mongoose = require("mongoose");
//Write missing code 
mongoose.connect("mongodb+srv://kamilanasrin:kamila@cluster0.apqppba.mongodb.net/Employ?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
