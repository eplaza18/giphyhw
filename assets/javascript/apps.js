$(function() {
console.log('Hello')

//Array of items
let topics = ['camp', 'hunt', 'backpacking']

//Giphy API link key = dc6zaTOxFJmzC
// Still gif = fixed_height_still

// function displayGifs () {
// var gifSearch = $(this).attr("data-name");


var queryURL = 'http:api.giphy.com/v1/gifs/search?q=hunting&api_key=dc6zaTOxFJmzC&limit=10&fixed_height_still';

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {


    console.log(response);
  });


//Creates buttons for items in array
function renderButtons() {

    // Loops through arrays
    for (i = 0; i < topics.length; i++){

      var a = $("<button>");
      
      a.addClass("gifbut");
      a.attr("data-name",topics[i]); 
      a.text(topics[i]);
      $("#buttons").append(a);
    }
  }
  renderButtons();
  
});