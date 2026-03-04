const express = require('express');

const Task = require('../models/Task');

const { createTask, getAllTasks, deleteTask } = require('../controllers/taskController');

const router = express.Router();



router.post("/", createTask);


router.get ("/", getAllTasks);



router.delete("/:id" , deleteTask);

module.exports = router;





