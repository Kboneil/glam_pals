$(function(){
console.log('jquery works');


$.ajax({

type: 'GET',
  url: '/bios',
  success: function(response) {
console.log('get bios request works');
console.log(response);
response.forEach(function(Person) {
  var $Person = $('<div class="back"></div>');
  $Person.append('<h2>' + Person.name + '</h2>');
  $Person.append('<p>' + '<img src="' + Person.image + '" height="100px"/></p>');
  $Person.append('<p>' + Person.bio + '</p>');
  $Person.append('<button id="' + Person.name + '">Like!</button>');
  $('.people').append($Person);


})
  }
});//end of GET bios

$('div').on('click', 'button', get);

$('div').on('click', '#Jackie', function (){
  $.ajax({
type: 'POST',
  url: '/likes/Jackie',
  success: get

  });
});

$('div').on('click', '#Patrick', function () {
$.ajax({
type: 'POST',
url: '/likes/Patrick',
success: get


});

});


$('div').on('click', '#Kelly', function () {
$.ajax({
type: 'POST',
url: '/likes/Kelly',
success: get


});

});


$('div').on('click', '#Connor', function () {
$.ajax({
type: 'POST',
url: '/likes/Connor',
success: get


});

});





});//ends doc ready function

function get (){
  $.ajax({
type: 'GET',
  url: '/likes',
  success: function(response) {

console.log('get likes request works');
console.log(response);
$.each( response, function( key, value ) {
  $('#' + key).text( 'Like! ' + value );
});
  }
});//end of GET bios

}
