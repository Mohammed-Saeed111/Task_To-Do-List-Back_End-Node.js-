const Task = require("../models/Task");


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({
            success: true,
            data: task
        });

    }catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }
        res.status(400).json({
            success: false,
            message: error.message});
       

    }
};



const getAllTasks = 
 async (req, res) => {
    try {
        const  tasks =  await Task.find().populate("user", "name email"); 
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks,
        });

    }catch (error) 
    {
        res.status(400).json({
            success: false,
            message: error.message});

    }
};



const deleteTask =   async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

         res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });

    } catch (error)
    {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    deleteTask

}

