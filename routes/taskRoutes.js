const express = require('express');
const { createTask, getAllTasks, deleteTask } = require('../controllers/taskController');

const Task = require('../models/Task');

const router = express.Router();



router.post("/",  createTask)


router.get ("/", getAllTasks)


router.delete("/:id", deleteTask)

module.exports = router;





