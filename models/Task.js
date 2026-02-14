const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title:
    {
        type : String,
        required: [true, "Please Enter a title "],
    },
    isCompleted: 
    {
        type : Boolean,
        // Automatically false (User doesn't send it)
        default: false,
    },
    email: 
    {
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    },
    user: 
    {
          
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    createdAt:
    {
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
