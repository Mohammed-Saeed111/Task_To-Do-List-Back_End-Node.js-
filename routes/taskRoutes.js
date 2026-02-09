const express = require('express');

const Task = require('../models/Task');

const router = express.Router();



router.post("/", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({
            success: true,
            count: 1,
            data: task
        });

    }catch (error) {
        if (error.code === 11000) {
            return 
            res.status(400).json({
                success: false,
                message: "Email already exists",
            });
        }
        res.status(400).json({message: error.message});
       

    }
})


router.get ("/", async (req, res) => {
    try {
        const  tasks =  await Task.find().populate("user", "name email"); 
        res.json({
            success: true,
            count: tasks.length,
            data: tasks,
        });

    }catch (error) 
    {
        res.status(400).json({message: error.message});

    }
});



router.delete("/:id" , async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task) 
        {
            return res.status(400).json({
                success: false,
                message: "Task Not Found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully",
        });

    } catch (error)
    {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
})

module.exports = router;





