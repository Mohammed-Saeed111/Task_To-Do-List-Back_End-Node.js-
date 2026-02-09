//Require ENV
require('dotenv').config();

//require mongoose
const mongoose = require('mongoose');
//require express 
const express = require('express');
//create server App By express
const app = express();
app.use(express.json());

//import routes/taskRoutes.js
const taskoutes = require('./routes/taskRoutes');

//use taskRoutes

app.use("/api/tasks", taskoutes)











//Mongoose connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log ("The database is connected to mongoDB");
    }catch (error){
        console.log("ERROR connecting to MongoDB: ", error.message);

    }
}

connectDB();

// Start server vby crete port & listen to it
const PORT =  process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log(`Server is running on port is: ${PORT}`);
})





