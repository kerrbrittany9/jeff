
$(document).ready(function() {
  $("#cubgoof").hover(function(){
    $("#cubs").toggle();
    $("#goofy").toggle();
  });

  $("#question").click(function(){
    $("#question").hide();
    $("#grammy").fadeIn(1500);

  });
  $("#grammy").click(function(){
    $("#grammy").hide();
    $("#emeline").fadeIn(1500);

  });
  $("#emeline").click(function(){
    $("#emeline").hide();
    $("#daddy").fadeIn(1500);

  });
});
