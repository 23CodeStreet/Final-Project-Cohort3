$(document).ready(function(){
    
    //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
    
    //**********PIE CHART***********//
    
//if wrong answer selected on pie chart

$(".wrongCircle" && "button").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
//if correct answer selected on pie chart

$(".correctCircle" && "button").click(function(){
        $("#answer").text("Yes that is correct. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
 //animation for pie chart & next question text

$("button").click(function(){
        $("span").text("Next Question")
        $(".semiCircle2").addClass("animated flash")
          $("button").click(function(){
  window.location.replace('Q4_pieChart.html')
    })
})
   
});
    
    

    