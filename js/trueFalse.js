$(document).ready(function() {

      //navigation dropdown
      $("#navbutton").click(function() {
          $("nav").slideToggle();
      })

      //**********TRUE OR FALSE***********//

      //if False is selected
      $("input.false").click(function() {

          $("button").click(function() {
                $("#answer").text("No that is incorrect. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!")
                $("span").text("Further Information")
           $("#female").addClass("animated bounce")
          })
            
            $("button").click(function() {
            window.location.replace('further-information.html')
            })
        })
    })

        //if True is selected

        $("input.true").click(function() {

        $("button").click(function() {
              $("span").text("Further Information")
              $("#female").addClass("animated bounce")
              $("#answer").text("Yes that is correct. In the 8 largest tech companies, female tech positions are growing 238% faster than male positions!")
              $("button").click(function() {
          window.location.replace('further-information.html')
          })
      })
    })
