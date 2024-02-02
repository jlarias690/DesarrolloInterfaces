$(document).ready(function () {
  var fechaActual = new Date();
  var segundosTotalesComienzo = 0;

  $(".btn1").click(function () {
    let horaComienzo = fechaActual.getHours();
    let minutosComienzo = fechaActual.getMinutes();
    let segundosComienzo = fechaActual.getSeconds();
    segundosTotalesComienzo =
      horaComienzo * 3600 + minutosComienzo * 60 + segundosComienzo;
    console.log(segundosTotalesComienzo);
    $(this).hide();
    $(".cuaPeque").show();
  });

  var i = 0;
  $(".cuaPeque").mouseenter(function () {
    if (i < 10) {
      $(this).hide();
      let pX = Math.random() * 420;
      let pY = Math.random() * 420;
      $(this).css("top", pX);
      $(this).css("left", pY);
      $(this).show();

      i = ++i;
    } else {
      let horaFinal = fechaActual.getHours();
      let minutosFinal = fechaActual.getMinutes();
      let segundosFinal = fechaActual.getSeconds();
      var segundosTotalesFinal =
        horaFinal * 3600 + minutosFinal * 60 + segundosFinal;

      tiempoFinal = segundosTotalesFinal - segundosTotalesComienzo;
      console.log(tiempoFinal);
      rank = document.getElementById("rank");
      rank.innerHTML = "<p>Has tardado =tiempoFinal </p>";
    }
  });
});
