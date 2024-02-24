$(".mouseenterMenu").mouseenter(function () {
  $(".menuDesplegable").css("visibility", "visible").slideDown();
});
$(".menuDesplegable").mouseleave(function () {
  $(".menuDesplegable").css("visibility", "hidden");
});

$(document).ready(function () {
  $("#btn1").click(function () {
    $(".politicaCookies").hide();
  });
});
