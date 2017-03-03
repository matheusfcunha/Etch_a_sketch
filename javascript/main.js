$(document).ready(function(){

  var divCount = 0;

    while (divCount < 257) {
    divCount++
    $('#wrapper').append("<div></div>")
    $('#wrapper > div').addClass("divGrid");
  };


});
