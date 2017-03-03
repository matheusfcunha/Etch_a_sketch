$(document).ready(function(){

  var divCount = 0;

    while (divCount < 256) {
    divCount++
    $('#wrapper').append("<div></div>")
    $('#wrapper > div').addClass("divGrid");
  };

  $('.divGrid').mouseenter(function(){

     $(this).css("background-color", "yellow");

  });

  $('#newSketch').click(function (){

    alert('hello!');

  });

});
