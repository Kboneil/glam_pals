var express = require('express');

var router = express.Router();


var Person = function (name, bio, image, likes) {

this.name = name,
this.bio = bio,
this.image = image,
this.likes = likes


};


var Jackie = new Person ('Jackie',  '"I am glad we are all here"', 'assets/images/jackie.jpeg', 0);

var Patrick = new Person ('Patrick', '"Where is Connor?"', 'assets/images/Pat.png', 0);

var Kelly = new Person ('Kelly', '"Who cares?"', 'assets/images/kelly.jpeg', 0);

var Connor = new Person  ('Connor', '"I hate you." - My mom', 'assets/images/CONNOR.jpg', 0);


var peopleArray = [Jackie, Patrick, Kelly, Connor];



router.get('/', function (req, res){
  res.send(peopleArray);
  console.log('array', peopleArray);
});




module.exports = router;
