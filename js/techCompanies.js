$(document).ready(function(){
  
  //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
   
   //**********TECH COMPANIES***********//
    
    //if correct tech company is selected
    $("").click(function(){
        $("#answer").text("Yes that is correct. In 2015 Ebay was named as a more diverse company.")
    })
    
    //if incorrect tech company is selected
    $("").click(function(){
        $("#answer").text("No that is incorrect. In 2015 Ebay was named as a more diverse company.")
    })
    
     //if correct % of staff is selected
    $("").click(function(){
        $("#answer").text("Yes that is correct. 24% of Ebay's staff were women.")
    })
    
    //if incorrect % of staff is selected
    $("").click(function(){
        $("#answer").text("No that is incorrect. 24% of Ebay's staff were women.")
    })
    
    //animation for tech companies & next question text

    $("button").click(function(){
        $("span").text("Next Question")
        $("#ebay").addClass("animated flip")
        $("#twentyFour").addClass("animated flip");
          $("button").click(function(){
  window.location.replace('Q2_barChart.html')
        })
    })
});