$(document).ready(function () {
  $("#btn1").click(function () {
    $("footer").hide();
  });

  $("#btn2").click(function () {
    $(".form").hide();
    $(".form2").show();
  });
});
