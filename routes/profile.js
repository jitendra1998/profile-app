var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Profile = require('../models/profile.js');
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');

/* GET ALL PROFILES */
router.get('/', function(req, res, next) {
  Profile.find(function (err, profiles) {
    if (err) return next(err);
    res.json(profiles);
  });
});

/* GET SINGLE PROFILE BY ID */
router.get('/:id', function(req, res, next) {
  Profile.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.post('/upload', function (req, res, next) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  
       // No error occured.
        path = req.file.path;
        return res.send(path); 
  });     
})
/* SAVE PROFILE */
router.post('/', function(req, res, next) {
  Profile.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;