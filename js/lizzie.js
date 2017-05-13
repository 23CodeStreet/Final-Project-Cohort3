/*$("button").click(function() {
    $("button").addClass("animated slideInUp");
    buttonClick();  
});*/

$(document).ready(function(){
    
    //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
    
   //if wrong answer selected on bar chart
    $(".wrong").click(function(){
        $("#answer").text("No that is incorrect. Only 20% of tech startups, across the world, are founded by women");  
    })
    
    //if correct answer selected on bar chart
    $("#correct").click(function(){
        $("#answer").text("Yes that is correct.  Only 20% of tech startups, across the world, are founded by women");
    })
    
    //animation for bar chart
    $(".chart").click(function(){
        $("#correct").addClass("animated flash");
    })
    
    //if correct answer selected on pie chart
    $(".segmentOne").click(function(){
        $("#answer").text("Yes that is correct. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
    //animation for pie chart
    $(".segmentOne").click(function(){
        $(".segmentOne").addClass("animated slideOutUp");
    })
    
    //if wrong answer selected on pie chart
    $(".segmentTwo").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
    //if wrong answer selected on pie chart
    $(".segmentThree").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
    //if wrong answer selected on pie chart
    $(".segmentFour").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
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

    