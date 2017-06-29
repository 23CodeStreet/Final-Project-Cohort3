$(document).ready(function(){
  
  //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
  
//**********BAR CHART***********//

   //if correct answer selected on bar chart
    
$("#correct" && "button").click(function(){
            $("#answer").text("Yes that is correct.  Only 20% of tech startups, across the world, are founded by women");
            })   

//if wrong answer selected on bar chart                            
$(".wrong" && "button").click(function(){
            $("#answer").text("No that is incorrect. Only 20% of tech startups, across the world, are founded by women");
            })

//animation for bar chart & next question text

    $("button").click(function(){
        $("span").text("Next Question")
        $("#submitTwo").attr("href", "Q3_simplePieChart.html")
        $("#correct").addClass("animated flash")
        $("button").click(function(){
 window.location.replace('Q3_simplePieChart.html')
        })
    })
    
});