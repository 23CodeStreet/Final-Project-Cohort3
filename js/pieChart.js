$(document).ready(function(){
    
    //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
    
    //**********PIE CHART***********//
    
//if correct answer selected on pie chart

$(".correctCircle").click(function(){
  $("button").click(function(){
        $("#answer").text("Yes that is correct. Only 5% of leadership positions, in the tech industry, are held by women.")
        $("span").text("Next Question")
        $(".semiCircle2").addClass("animated flash")
      $(".five").addClass("animated flash")
        $("button").click(function(){
  window.location.replace('Q4_pieChart.html')
        })
      })
    })
    
//if incorrect answer is selected on pie chart

$(".wrongCircle").click(function() {
  
$("button").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
        $("span").text("Next Question")
        $(".semiCircle2").addClass("animated flash")
      $(".five").addClass("animated flash")
          $("button").click(function(){
  window.location.replace('Q4_pieChart.html')
        })
      })  
    })
});
    
    

    