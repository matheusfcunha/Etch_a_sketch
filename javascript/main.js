$(document).ready(function() {


    var divCount = 0;
    while (divCount < 256) {
        divCount++;
        $('#wrapper').append("<div></div>");
    };

    $('#wrapper > div').addClass("divGrid");

/*----------------------COLOR CHANGE-------------------------------*/


   $("#bg").change(function(){
        $(".divGrid").css("background-color",$("#bg").val());
    });


/*----------------------------------------------------------------*/

$('.divGrid').mouseenter(function() {
    $(this).css("background-color",$("#color").val());
});

    $('#newSketch').click(function() {

        $('#wrapper > div').remove();
        var height = 500;
        var width = 800;
        var userNumber = prompt('How many pixels do you want? Example: 32 (32x32)');
               if (userNumber === "" || userNumber === "0") {
                 userNumber = "16"
               };
               if (isNaN(userNumber)) {
                 userNumber = "16"
                 alert("Only numbers please");
               };
        var userPixels = parseInt(userNumber);


        var divCount = userPixels;
        var loopCount = userPixels * userPixels;

        while (divCount < loopCount + userPixels) {
            divCount++;
            $('#wrapper').append("<div></div>");
        };

        $('#wrapper > div').addClass("divGrid");

        formattedHeight = height / userPixels;
        formattedWidth = width / userPixels;
        $('.divGrid').height(formattedHeight);
        $('.divGrid').width(formattedWidth);


    $('.divGrid').mouseenter(function() {
        $(this).css("background-color",$("#color").val());
    });

    });

});
