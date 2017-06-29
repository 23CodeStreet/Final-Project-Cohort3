$(document).ready(function(){
  
  //navigation dropdown
   $("#navbutton").click(function(){
       $("nav").slideToggle();
   })

//**********TRUE OR FALSE***********//
    
    //if True is selected
    $("").click(function(){
        $("#answer").text("Yes that is correct. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!");
    })
    
    //if False is selected
    $("").click(function(){
        $("#answer").text("No that is incorrect. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!");
    })
    
    //animation for True or False page
    $("button").click(function(){
        $("span").text("Further Information")
        $("#female").addClass("animated bounce")
        $("button").click(function(){
            window.location.replace('further-information.html')
        })
    })
});