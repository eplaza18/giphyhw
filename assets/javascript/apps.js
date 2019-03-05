$(function() {
console.log('Hello')

//Array of items
let topics = ['camp', 'hunting', 'backpacking']
renderButtons();
//Giphy API link key = dc6zaTOxFJmzC
// Still gif = fixed_height_still

// function displayGifs () {
// var gifSearch = $(this).attr("data-name");
function addGifs() {
  
  let gif = $(this).attr('data-name');
  var queryURL = 'https:api.giphy.com/v1/gifs/search?q=' + gif + '&api_key=dc6zaTOxFJmzC&limit=10&fixed_height_still';

  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {

    var imageUrl = response.data;
    console.log(imageUrl);

    for (i = 0; i < imageUrl.length; i++) {
      var gifContainer = $('<div class = "images">');
      var rating = imageUrl[i].rating;
      var ratingText = $('<h2>').text(`Rating: ${rating}`);
      var gifImage = $(`<img stillSrc = "${imageUrl[i].images.fixed_height_still.url}" 
        animatedSrc = "${imageUrl[i].images.fixed_height.url}"
        src = "${imageUrl[i].images.fixed_height_still.url}">`);
      gifContainer.append(ratingText);
      gifContainer.append(gifImage);
      $('#gif-view').prepend(gifContainer);

    }
  });
}
    // gifImage.attr('src', imageUrl);
    // gifImage.attr('alt', gif);
    // $('#gif-view').append(gifImage);
//Creates buttons for items in array
function renderButtons() {

    $('#button-view').empty();
    for (i = 0; i < topics.length; i++){
      var a = $("<button>");
      a.addClass("gifbut");
      a.attr("data-name",topics[i]); 
      a.text(topics[i]);
      $("#button-view").append(a); 
    }
  }

  //Adds item from the search box into the array for a new button
  $('#add-gif').on('click', function(event){
    event.preventDefault();
    let gif = $('#gif-input').val().trim();
    topics.push(gif);
    renderButtons(); 
  });

  //Resets buttons to work after new one is generated
  $(document).on("click", ".gifbut", addGifs);
    

  //Changes status from animated to still and vice versa  
  $(document.body).on("click", "img", function() { 
      var isAnimated = $(this).attr("isAnimated");
      if(isAnimated==null || isAnimated=='' ){
        isAnimated =  "false";
      }
  
      if(isAnimated=="true"){
        $(this).attr("src",  $(this).attr("stillSrc") );
        $(this).attr("isAnimated", "false");
  
      } else {
        $(this).attr("src",  $(this).attr("animatedSrc") );
        $(this).attr("isAnimated", "true");
      }
  });
  
});