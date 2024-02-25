$(".mouseenterMenu").mouseenter(function () {
  $(".menuDesplegable").css("visibility", "visible").slideDown();
});
$(".menuDesplegable").mouseleave(function () {
  $(".menuDesplegable").css("visibility", "hidden");
});

//Login
$(document).ready(function () {
  $("#btn1").click(function () {
    $(".politicaCookies").hide();
  });

  //Cuando pulse el boton con id b1 empiza ha realizar las validaciones tanto del correo como de la contraseña
  $("#b1").click(function () {
    var correoOK = false;
    var passOK = false;
    //VALIDACION CORREO
    // Seleccionamos el input por su id
    var correo = $("#email").val();

    // Expresión regular para validar el formato del correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificamos si el valor es null o está rellenado
    if (correo === null || correo.length === 0) {
      $("#resultado").text("El campo está vacío o es null");
    } else {
      if (!regexCorreo.test(correo)) {
        $("#resultado").text("El correo electrónico no es válido.");
      } else {
        correoOK = true;
      }
    }
    //VALIDACION DE CONTRASEÑA
    var pass = $("#pass").val();
    // Expresiones regulares para validar la contraseña
    var regexLongitud = /.{8,}/;
    var regexMayuscula = /[A-Z]/;
    var regexMinuscula = /[a-z]/;
    var regexNumero = /[0-9]/;
    var regexCaracterEspecial = /[$&+,:;=?@#|'<>.^*()%!-]/;

    // Verificar cada criterio de validación
    if (!regexLongitud.test(pass)) {
      $("#resultado2").text("La contraseña debe tener al menos 8 caracteres.");
    } else if (!regexMayuscula.test(pass)) {
      $("#resultado2").text(
        "La contraseña debe contener al menos una letra mayúscula."
      );
    } else if (!regexMinuscula.test(pass)) {
      $("#resultado2").text(
        "La contraseña debe contener al menos una letra minúscula."
      );
    } else if (!regexNumero.test(pass)) {
      $("#resultado2").text("La contraseña debe contener al menos un número.");
    } else if (!regexCaracterEspecial.test(pass)) {
      $("#resultado2").text(
        "La contraseña debe contener al menos un carácter especial."
      );
    } else {
      passOK = true;
    }

    //Comprobamos que las variables Boolean sean true para dar por finalizado el inicio de sesion.
    if (passOK == true && correoOK == true) {
      $("#mensaje-bienvenida").text("¡Bienvenido/a, " + correo + "!");
      $(".modal").removeClass("oculto").fadeIn();
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    }
  });
});

//Cambio de estado de la vista de los libros.
$(document).ready(function () {
  $("#botonLista").click(function () {
    $("#botonParrilla").show();
    $(".lista").show();
    $(".parrillaTitulo").hide();
    $("#botonLista").hide();
  });

  $("#botonParrilla").click(function () {
    $("#botonLista").show();
    $(".parrillaTitulo").show();
    $(".lista").hide();
    $("#botonParrilla").hide();
  });
});
//Funcionalidad del logo
$(document).ready(function () {
  $("#logo").click(function () {
    window.location.href = "index.html";
  });
});

//Modal en el index.html

$(document).ready(function () {
  // Función para deshabilitar clics en todo el documento excepto en el modal
  function disableClicksOutsideModal() {
    $(document).on("click", function (event) {
      if (
        !$(event.target).closest(".modal").length &&
        !$(event.target).is(".modal")
      ) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    });
  }

  // Función para habilitar clics en todo el documento
  function enableClicks() {
    $(document).off("click");
  }

  // Mostrar el modal al cargar la página
  $("#myModal").css("display", "block");
  $("#opaqueBackground").css("display", "block"); // Mostrar el fondo opaco
  disableClicks(); // Deshabilitar clics en todo el documento

  // Obtener el modal y el botón de cerrar
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  // Cuando el usuario haga clic en <span> (x), cerrar el modal
  span.onclick = function () {
    modal.style.display = "none";
    $("#opaqueBackground").css("display", "none"); // Ocultar el fondo opaco
    enableClicks(); // Habilitar clics en todo el documento
  };

  // Cuando el usuario haga clic en cualquier parte fuera del modal, cerrarlo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $("#opaqueBackground").css("display", "none"); // Ocultar el fondo opaco
      enableClicks(); // Habilitar clics en todo el documento
    }
  };

  // Habilitar el botón de aceptar cuando se marque el checkbox
  $(document).on("change", "#checkbox", function () {
    if ($(this).is(":checked")) {
      $("#btnAceptar").prop("disabled", false);
    } else {
      $("#btnAceptar").prop("disabled", true);
    }
  });
});
