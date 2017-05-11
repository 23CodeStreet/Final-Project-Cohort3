/*$("button").click(function() {
    $("button").addClass("animated slideInUp");
    buttonClick();  
});*/

$(document).ready(function(){
    
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
    

    $(".wrong").click(function(){
        $("#answer").text("No that is incorrect. Only 20% of tech startups, across the world, are founded by women");  
    })
    
    $("#correct").click(function(){
        $("#answer").text("Yes that is correct.  Only 20% of tech startups, across the world, are founded by women");
    })
    
    $(".chart").click(function(){
        $("#correct").addClass("animated flash");
    })
        
});

/*$("#btn1").click(function(){
        $("#test1").text("Hello world!");
    });
  $(document).ready(function(){
    
    //setTimeout(turnRed, 5000) - use this instead of button to start traffic lights when browser window opens
    
    $('#button').click(turnRed);
    
    //$(selector).action(change colour to red)
    
    function turnRed(){
        $('#red').css('background-color', '#ff0000');
        setTimeout(turnOrange, 5000)
    }*/

    