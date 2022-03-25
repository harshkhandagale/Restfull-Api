const mongoose = require("mongoose");
const validator = require("validator");

//Schema
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        unique:true,
        min:10,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
});

//Model
const Student = new  mongoose.model("Student", studentSchema);

//exporting
module.exports = Student;


