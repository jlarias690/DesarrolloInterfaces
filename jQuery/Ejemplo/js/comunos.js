/*Arreglar error cuando no se interpreta el caracter $ en jQuery
jQuery(document).ready(function ($) {});
*/

//Para esperar que me cargue la pagina usamos el $(document).ready(function () {})
$(document).ready(function () {
  console.log("oka");
  //Para que se vea, se usa el metodo show()
  //Para ocultar, hide()

  $(".mostrarContenedor").click(function () {
    $(".contenedor").show();
    $(this).hide();
    $(".ocultarContenedor").show();
  });

  $(".ocultarContenedor").click(function () {
    $(".contenedor").hide();
    $(this).hide();
    $(".mostrarContenedor").show();
  });

  //.css(param1,param2) SIRVE PARA ESCRIBIR UN VALOR
  //.CSS (param1) SIRVE PARA LEER EL VALOR QUE TIENE

  //Para incluir un único valor
  $(".contenedor").css("border", "2px solid #000");

  //Para incluir varios valores.
  $(".contenedor").css({
    border: "2px solid #000",
    padding: "em",
  });

  //Obtener el valor
  console.log($(".contenedor").css("border"));
});
