const express = require('express');
const router = express.Router();

let User = require('../models/user.model');

// first end point handles the coming http GET request 
router.route('/').get((req, res) => {
    console.log("users.js -- get all users ");
     User.find() // find() method returns a promise, the result is being passed into the then()'s parameter "users",
                // whilch means then is using the results from the User.find() function 
                // then the "users" is reponded as json format 
                // the json format is for people to read what is inside of the db, 
                // but if reading the result is not as important, 
                // the result is still being get
        .then((users) => res.json(users))
        .catch( err => res.status(400).json("Error: " + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username; // to get the data 
    const newUser = new User({username}); // to create a new user from the body 

    newUser.save()
        .then(() => res.json("user added"))
        .catch( (err) => res.status(400).json("Error: " + err)); 
        
});

module.exports = router;