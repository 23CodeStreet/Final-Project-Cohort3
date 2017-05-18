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
    $(".percent").click(function(){
        $(".pieChart").addClass("animated rotateIn");
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
    
    
    //animation for women in leadership positions
    $(".leadership").click(function(){
        $("#female").addClass("animated bounce");
    })
    
    $("#trueButton").click(function(){
        $("#answer").text("Yes that is correct. There are no more than 5% of women in leadership positions, in the technology industry.")
    })
    
    $("#falseButton").click(function(){
        $("#answer").text("No that is incorrect. There are no more than 5% of women in leadership positions, in the technology industry.")
    })
    
    /**************************
    Counter for females in tech
    **************************/
    
    var boolean = false;
    
    $('#stopButton').click(function() {
        boolean = true;
    });
        
    $('#startButton').click(startCounter);
    
    function startCounter() {
        
        light = $('.lights').last();
        light.css('background-color', '#040716');
        
        for (var i = 0; i < 14; i++) {

            // create a closure to preserve the value of "i"
            (function(i){
                window.setTimeout(function(){
                    light = light.prevAll('.lights:first');
                    light.css('background-color', '#040716');
                }, i * 2000);
//                if (boolean === false) { break; }
            }(i));
        }
    }
}); 
    
    
    
    
    
    //**********TESTING*************
    
    //counter for 238% female increase
    
    //$(selector).action(call function)
    
     /*
    So the below functions are all doing exactly the same thing over and over again. 
    We could do this one time using a loop to target all of the elements.
    So you are using the class 'lights'. 
    
    Maybe you can make one function e.g. 'startCounter' which targets the last instance of lamp (because we're counting up from the bottom)
    
    $('.lamp').last().css('')... etc etc
    
    and then do a loop 
    for... var i is less than the number of elements with lamp class...

        $(this).prevAll('.lamp:first').css(''); etc. 
        
        And then inside the for loop you can check if the 'stop' button has been clicked. 
        Let's say you change a variable when the stop button is clicked, the for loop can check if that variable is true / false and if it's false 
        just break out of the loop.

    
    var lights = 15;
    var boolean = true;
    
    $('#stopButton').click(function() {
        boolean = false;
    });
        
    $('#startButton').click(startCounter);
    
        function startCounter(){
        $('.lights').last().css('background-color', '#040716');
        setTimeout(3000);

      /*for (var i=0; i < 15; i++){  $(this).prevAll('.lights:first').css('background-color', '#040716');
        setTimeout(3000);
       /*if (boolean === false) { break; } */                    
        /*};
    };
});


   /* function one(){
        $('#one').css('background-color', '#040716');
        setTimeout(two, 3000);
    }
    
    function two(){
        $('#two').css('background-color', '#070d2c');
        setTimeout(three, 3000);
    }
    
    function three(){
        $('#three').css('background-color', '#0b1442');
        setTimeout(four, 3000);
    }
    
    function four(){
        $('#four').css('background-color', '#0e1b58');
        setTimeout(five, 3000);
    }
    
    function five(){
        $('#five').css('background-color', '#12216e');
        setTimeout(six, 3000);
    }
    
    function six(){
        $('#six').css('background-color', '#152884');
        setTimeout(seven, 3000);
    }
    
    function seven(){
        $('#seven').css('background-color', '#192e9a');
        setTimeout(eight, 3000);
    }
    
    function eight(){
        $('#eight').css('background-color', '#1d35af');
        setTimeout(nine, 3000);
    }
    
    function nine(){
        $('#nine').css('background-color', '#203cc5');
        setTimeout(ten, 3000);
    }
    
    function ten(){
        $('#ten').css('background-color', '#2341d8');
        setTimeout(eleven, 3000);
    }
    
    function eleven(){
        $('#eleven').css('background-color', '#2442db');
        setTimeout(twelve, 3000);
    }
    
    function twelve(){
        $('#twelve').css('background-color', '#3a55df');
        setTimeout(thirteen, 3000);
    }
    
    function thirteen(){
        $('#thirteen').css('background-color', '#5068e2');
        setTimeout(fourteen, 3000);
    }
    
    function fourteen(){
        $('#fourteen').css('background-color', '#657be6');
        setTimeout(fifteen, 3000);
    }
    
    function fifteen(){
        $('#fifteen').css('background-color', '#7b8eea');
        setTimeout(3000);
    }
    
});
    
    $('#stopButton').click(function(){
        $("#counter").stop();
    });*/
       


    

    