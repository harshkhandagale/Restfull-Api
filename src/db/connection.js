//connecting to database using mongoose
//whatever you write here , you should connect to the express in app.js i.e require("./db/connection")
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student-api",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("connection successfull...")).catch((err)=>console.log(err));