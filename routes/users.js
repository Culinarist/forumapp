var express = require('express');
var bodyParser = require('body-parser');
var Models = require('../models');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// GET ALL
router.get('/', function(req, res, next) {
    Models.User.findAll().then(function(users) {
      console.log(users);
      res.json(users);
    });
});

// GET BY ID
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
  
  Models.User.findById(topicId).then(function(topic) {
    console.log(topic);
    res.json(topic);
  })
  
});

// GET BY USERNAME
router.get('/username/:username', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var userN = req.params.username;
  
  Models.User.findOne({ where: {username: userN} }).then(function(user) {
    console.log(user);
    res.json(user);
  })
  
});

// CREATE
router.post('/', function(req, res, next) {
  var userToAdd = req.body;
  
  console.log(userToAdd);
  
  Models.User.create(userToAdd)
    .then(function(user) {
    res.json(user);
  });

});

// Update

// Delete

// Auth
router.post('/authenticate', function(req, res, next) {
  var user = req.body;
  
  Models.User.findOne({ where: {username: user.username, password: user.password} })
    .then(function(user) {
        if(user){
            res.sendStatus(200);
        }
        res.sendStatus(404);
  }).catch(function(err){
      console.log(err);
      res.sendStatus(404);
  });

});


module.exports = router;