$(document).ready(function(){
   $(".container").click(function(){
       $("nav").slideToggle();
   });
});
function myFunction(x) {
    x.classList.toggle("change");
}