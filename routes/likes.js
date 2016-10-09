var express = require('express');

var router = express.Router();

var peopleLike = {'Jackie': 0, 'Patrick': 0, 'Kelly': 0, 'Connor': 0};

router.get('/', function (req, res){

  res.send(peopleLike);
});

router.post('/Jackie', function (req, res){
peopleLike.Jackie++;
  res.send(peopleLike);
});


router.post('/Patrick', function (req, res) {
peopleLike.Patrick++;
res.send (peopleLike);

});

router.post('/Kelly', function (req, res) {
peopleLike.Kelly++;
res.send (peopleLike);

});

router.post('/Connor', function (req, res) {
peopleLike.Connor++;
res.send (peopleLike);

});

//
// router.get('/Jackie', function (req, res){
//   res.send({title:'People Are Strange'});
// });


module.exports = router;
