$(document).ready(function(){
    
    
    // on click all panels fade to 10% opacity
    $(".theButton").click(function(){
        $("#panel .container").siblings().fadeTo("slow", .1);
    });
    
});