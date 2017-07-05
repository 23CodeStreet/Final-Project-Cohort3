$(document).ready(function(){
  
  //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
  
//**********BAR CHART***********//

//if wrong answer selected on bar chart

$(".wrong").click(function(){
    $("button").click(function(){
        $("#answer").text("No that is incorrect.  20% of tech startups, across the world, are founded by women");
        $("span").text("Next Question")
        $("#correct").addClass("animated flash")
        $("button").click(function(){
 window.location.replace('Q3_simplePieChart.html')
        })
    })
})


//if corrct answer selected on bar chart
$("#correct").click(function(){
    $("button").click(function(){
        $("#answer").text("Yes that is correct.  20% of tech startups, across the world, are founded by women");
        $("span").text("Next Question")
        $("#correct").addClass("animated flash")
        $("button").click(function(){
 window.location.replace('Q3_simplePieChart.html')
        })
      })
    })
});