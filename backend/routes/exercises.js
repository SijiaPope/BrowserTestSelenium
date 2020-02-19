const express = require('express');
const router = express.Router();

let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then( (exercises) => {res.json(exercises)})
    .catch( (err) => res.status(400).json("Error: " + err));

});

router.route('/add').post( (req, res) => {
  const ex = req.body; // first if there is a body, body is passed with "req", so first get the body from the req by req.body
  
  // ------ destruct from an object ------
  // now get all the variables from the body, since the body is send in the form of json, 
  // when get variables out of the json, use dot "."
  const userName = ex.userName;
  const description = ex.description;
  const duration = Number(ex.duration); // and when need to format the variable, format them here to be the same as how they would have been stored in the database schema  
  const date = Date.parse(ex.date);

  // ------ construct to an object ------
  // construct to a new object using all the variables just got
  const newEx = new Exercise({
    userName,
    description,
    duration,
    date
  });
  
  // how to do a post request? use .save()
  newEx.save()
    .then( () => {res.json("exercise added")}) // this get the result of the request 
    .catch( (err) => {res.status(400).json("Error when save newEx on line 35: " + err)});
});

// id is already being passed into the url, so can use it from req.params.  
// since it is a get request, use "findById"
router.route('/:id').get( (req, res) => {
  Exercise.findById(req.params.id)
    .then( (ex) => res.json(ex))
    .catch( (err) => {res.status(400).json("Error when try to get exercise id line 43: " + err)});
});

// since it is a post request, use --"findById"-- then --"save"-- it into the DB 
// since it is a update, that means there is an object already being stored in the DB, 
// so after get it from the DB, can just modify it .. 
router.route('/update/:id').post( (req, res) => {

  // first think what we get from this query --> a Exercise object by the id 
  Exercise.findById(req.params.id) 
    .then( ex => { 

      // ex is the result we get from the DB accroding to the id
      // then the following is changing the properties of the ex we get directly
      // so we don't need to parse into Exercise to create a new object and then pass to DB 
      // --> it's like changing the variables directly in the DB 

      ex.userName = req.body.userName;
      ex.description = req.body.description;
      ex.duration = Number(req.body.duration);
      ex.date = Date.parse(req.body.date);

      ex.save()
        .then( () => {res.json("exercise is changed")})
        .catch( (err) => {res.status(400).json("Error: " + err)});
    })

    .catch( (err) => {res.status(400).json("Error: " + err)});   
});

module.exports = router;