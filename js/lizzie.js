
$(document).ready(function(){
    
    //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })
    
   //**********BAR CHART***********//
   
    //animation for bar chart & next question text

    $("button").click(function(){
        $("span").text("Next Question")
        $("#submitTwo").attr("href", "Q3_simplePieChart.html")
        $("#correct").addClass("animated flash")
    })
        
$("#correct" && "button").click(function(){
            $("#answer").text("Yes that is correct.  Only 20% of tech startups, across the world, are founded by women");
            })   
                                  
$(".wrong" && "button").click(function(){
            $("#answer").text("No that is incorrect. Only 20% of tech startups, across the world, are founded by women");
            })

    
    //**********PIE CHART***********//
    
    //if wrong answer selected on pie chart
    $(".wrongCircle").click(function(){
        $("#answer").text("No that is incorrect. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
    //if correct answer selected on pie chart
    $(".correctCircle").click(function(){
        $("#answer").text("Yes that is correct. Only 5% of leadership positions, in the tech industry, are held by women.")
    })
    
    //animation for pie chart
    $(".percentageList").click(function(){
        $(".semiCircle2").addClass("animated flash");
    })
    
    

    //**********TECH COMPANIES***********//
    
    //if correct tech company is selected
    $("#ebay").click(function(){
        $("#answer").text("Yes that is correct. In 2015 Ebay was named as a more diverse company.")
    })
    
    //if incorrect tech company is selected
    $(".company").click(function(){
        $("#answer").text("No that is incorrect. In 2015 Ebay was named as a more diverse company.")
    })
    
     //if correct % of staff is selected
    $("#twentyFour").click(function(){
        $("#answer").text("Yes that is correct. 24% of Ebay's staff were women.")
    })
    
    //if incorrect % of staff is selected
    $(".staff").click(function(){
        $("#answer").text("No that is incorrect. 24% of Ebay's staff were women.")
    })
    
    //animation for ebay
    $(".companies").click(function(){
        $("#ebay").addClass("animated flip");
    })
    
    //animation for percentage of staff 
    $(".percentageStaff").click(function(){
        $("#twentyFour").addClass("animated flip");
    })
    
    //**********TRUE OR FALSE***********//
    
    //animation for True or False page
    $(".question").click(function(){
        $("#female").addClass("animated bounce");
    })
    
    //if True is selected
    $("").click(function(){
        $("#answer").text("Yes that is correct. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!");
    })
    
    //if False is selected
    $("").click(function(){
        $("#answer").text("No that is incorrect. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!");
    })
    
    
});
    
    

    