const mongoose = require("mongoose");


const CourseSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description: {type:String, required: true},
    subject: {type:String, required: true},
    credits: {type:Number, min:1, max:4, required: true}
})

const Course = mongoose.connection.useDb("Courses").model("courses", CourseSchema);

module.exports = Course;