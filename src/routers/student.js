const express = require("express");
const Student = require("../models/students");
const router = new express.Router();

//req givin in body will store in user, then wait for save then save in createUser and send req(201), previously we used app.post, app.get. etc , but we have to keep a=our app.js clean so we are using router here l, so now it router.get, router.post etc..
router.post("/students", async(req,res)=>{
    try{
    const user = new Student(req.body);
    const createUser=await user.save();
    res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e)
    }
})

//read data i.e get...  here it is students s
router.get("/students", async (req,res)=>{
    try{
       const studentsData=await Student.find()
       res.send(studentsData)
    }catch(e){
        res.send(e)
    }
})

//read data individually... here it is student   check spellings are differnt
router.get("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);

        if(!studentData){
            return req.status(404).send();
        }
        else{
            res.send(studentData);
        }
    }catch(e){
        res.send(e)
    }
})

//update
 router.patch("/students/:id", async(req,res)=>{
     try{
        const _id = req.params.id; 
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{new:true});
        res.send(updateStudents);
     }catch(e){
        res.status(404).send(e)
     }
 })

//delete
router.delete("/student/:id", async(req, res)=>{
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id, req.body, {new:true})
        res.send(deleteStudent);
    }catch(e){
        res.status(404).send(e)
    }
})

//export because we are running app.js file here and the terminal dosent know about the student.js

module.exports = router;