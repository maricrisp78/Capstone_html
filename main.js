$(document).ready(function(){
var header = $('body');

var backgrounds = new Array(
    'url(images/oldschoolvan.jpg)'
  , 'url(images/palmtrees.jpg)'
  , 'url(images/sunset - high res.jpg)'
  , 'url(images/Burano-Italy.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 1000);

header.css('background-image', backgrounds[0]);
});
