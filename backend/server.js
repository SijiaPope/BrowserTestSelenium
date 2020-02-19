const express = require('express'); // for backend schema 
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config()

// create express server 
const app = express();
const port = process.env.PORT || 5000;

// middleware 
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// connect to db 
// ATLAS_URI is the name defined in the env file 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log(err));

// connect to the routes 
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// middleware -> codes runs before the routes controller runs 
// this tells the server what the routes are going to be using 
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});





