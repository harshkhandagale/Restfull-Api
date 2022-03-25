//This is express connecting api, sending req, res, to the server and mongodb
const express = require("express");
require("./db/connection");
const Student = require("./models/students");
const studentRouter =  require("./routers/student");
const res = require("express/lib/response");


const app = express();
//giving port number 
const port = process.env.PORT || 8000


app.use(studentRouter);
// to recognize the incoming request we use express.json  i.e app.use(express.json()) 
app.use(express.json())
 

//creating /students and (request,response)
// app.post("/students", (req, res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
//     res.send("hello students")
// })






app.listen(port, ()=>{
    console.log(`sucessfull connection at localhost:${port}`)
})
