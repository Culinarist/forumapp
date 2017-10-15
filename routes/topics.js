var express = require('express');
var bodyParser = require('body-parser');
var Models = require('../models');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Huom! Kaikki polut alkavat polulla /topics

/*
NÄIN KÄYTETÄÄN RELAATIOTA JA LIITETÄÄN TOINEN ENTITEETTI TOISEEN
-----------------------------------------------------------------
Author.findOne({
 where: { name: 'John Ronald Reuel Tolkien' },
 include: { model: Book }
}).then(function(author){
 console.log(author.Books);
});

var bookToAdd = {
 name: 'The Hobbit or There and Back Again',
 year: 1937
};
bookToAdd.AuthorId = 1; // Viittaa kirjailijaan nimeltä "John Ronald Reuel
Tolkien".
Book.create(bookToAdd).then(function(book){
 console.log(book)
});
*/

// GET /topics
router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
    Models.Topic.findAll().then(function(topic) {
      res.json(topic);
    });
    
});

// GET /topics/:id
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
  
  Models.Topic.findById(topicId).then(function(topic) {
    res.json(topic);
  })
  
});

// GET /topics/:UserId
router.get('/user/:userId', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var user = req.params.userId;
  console.log(user);
  
  Models.Topic.findAll({ include: [ {model: Models.User, where: { id: user } }] }).then(function(topic) {
    res.json(topic);
  })
  
});

// POST /topics
router.post('/', function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
  
  Models.Topic.create(topicToAdd)
    .then(function(topic) {
    console.log('Topic lisätty tietokantaan onnistuneesti!');
    // Palauta vastauksena lisätty aihealue
    res.json(topic);
  });

});

// POST /topics/:id/
router.post('/:id', function(req, res, next) {
  var topicToAdd = req.body;
  topicToAdd.UserId = req.params.id;
  console.log(topicToAdd);
  
  Models.Topic.create(topicToAdd)
    .then(function(topic) {
    console.log('Topic lisätty tietokantaan onnistuneesti!');
    // Palauta vastauksena lisätty aihealue
    res.json(topic);
  });
  
});

module.exports = router;