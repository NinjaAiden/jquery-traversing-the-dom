$(document).ready(function() {


    // on hover panel changes to black
    $(".theButton").mouseenter(function() {
        $(this).addClass("black");
    });
    
    // change panel back to original color
    $(".theButton").mouseleave(function(){
        $(this).removeClass("black");
    })


});
