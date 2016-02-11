$(document).ready (function() {

$(".button").click (function() {
$.getJSON("http://api.flckr.com/services/feeds/photos_public.gne?jsoncallback=?",)
      {
              tags: "car",
              tagmode: "any",
              format: "json"
          }, function (data) {
      $.each(data.items, function(i, item){
        $('<img/>').attr("src", item.media.m).appendTo('#images');
        if(i==3) return false;
           
      });
    });
  
  });
                   
});







// $(document).ready(function(){
// var header = $('body');

// var backgrounds = new Array(
//     'url(images/oldschoolvan.jpg)'
//   , 'url(images/palmtrees.jpg)'
//   , 'url(images/sunset - high res.jpg)'
//   , 'url(images/Burano-Italy.jpg)'
// );

// var current = 0;

// function nextBackground() {
//     current++;
//     current = current % backgrounds.length;
//     header.css('background-image', backgrounds[current]);
// }
// setInterval(nextBackground, 1000);

// header.css('background-image', backgrounds[0]);
// });
