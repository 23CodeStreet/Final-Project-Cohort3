$(document).ready(function(){
  
  //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
   
   //**********TECH COMPANIES***********//
    
  //if correct tech company & % is selected
   
   $("#ebay").click(function(){
     $("#twentyFour").click(function(){
      $("button").click(function(){
        $("#answer").text("Yes that is correct. In 2015 Ebay was named as a more diverse company. 24% of Ebay's staff were women.")
        $("span").text("Next Question")
        $("#ebay").addClass("animated flip")
        $("#twentyFour").addClass("animated flip");
          $("button").click(function(){
  window.location.replace('Q2_barChart.html')
          })
        })
      })
    })

  //if incorrect tech company & % is selected

    $(".company").click(function(){
     $(".staff").click(function(){
      $("button").click(function(){
        $("#answer").text("No that is incorrect. In 2015 Ebay was named as a more diverse company. 24% of Ebay's staff were women.")
        $("span").text("Next Question")
        $("#ebay").addClass("animated flip")
        $("#twentyFour").addClass("animated flip");
          $("button").click(function(){
  window.location.replace('Q2_barChart.html')
          })
        })
      })
    })

    
//if incorrect tech company but correct % is selected

    $(".company").click(function(){
     $("#twentyFour").click(function(){
      $("button").click(function(){
        $("#answer").text("The company you selected is incorrect. In 2015 Ebay was named as a more diverse company. However, you are correct that 24% of Ebay's staff were women.")
        $("span").text("Next Question")
        $("#ebay").addClass("animated flip")
        $("#twentyFour").addClass("animated flip");
          $("button").click(function(){
  window.location.replace('Q2_barChart.html')
          })
        })
      })
    })


//if correct tech company but incorrect % is selected

    $("#ebay").click(function(){
     $(".staff").click(function(){
      $("button").click(function(){
        $("#answer").text("The company you selected is correct. In 2015 Ebay was named as a more diverse company. However, the percentage you selected is incorrect. 24% of Ebay's staff were women.")
        $("span").text("Next Question")
        $("#ebay").addClass("animated flip")
        $("#twentyFour").addClass("animated flip");
          $("button").click(function(){
  window.location.replace('Q2_barChart.html')
          })
        })
      })
    })
});