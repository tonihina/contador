function flexiones(){
    var lagartijas=$('[name="cantidadFlexiones"]').val();
  
    window.localStorage.setItem("flexiones", lagartijas);
    var nombre = window.localStorage.getItem("nombre"); 

    $("#salidaFlexiones").html("Cantidad hecha: " + lagartijas);
    var dataString = "nombre=" + nombre + "&flexiones=" + lagartijas + "&update=";
    $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/actualizaFlexiones.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            document.getElementById("enviarFlexion").innerHTML = "Enviando...";
          },
        success: function(data) {
          if (data == "success") {
            return $.mobile.changePage("#pruebas", {
                reverse: false,
                transition: "slide"
            });
          } else if (data == "error") {
              alert("error");
          }
      }
      });

}

function sentadillas(){
    var sentadillas=$('[name="cantidadSentadillas"]').val();
  
    window.localStorage.setItem("sentadillas", sentadillas);
    var nombre = window.localStorage.getItem("nombre");
    $("#salidaSentadillas").html("Cantidad hecha: " + sentadillas);
    var dataString = "nombre=" + nombre + "&sentadillas=" + sentadillas + "&update=";
    $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/actualizaSentadillas.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            document.getElementById("enviarSentadilla").innerHTML = "Enviando...";
          },
        success: function(data) {
          if (data == "success") {
            return $.mobile.changePage("#pruebas", {
                reverse: false,
                transition: "slide"
            });
          } else if (data == "error") {
              alert("error");
          }
      }
      });
}

function abdominales(){
    var abdominales=$('[name="cantidadAbdominales"]').val();
  
    window.localStorage.setItem("abdominales", abdominales);
    var nombre = window.localStorage.getItem("nombre");
    $("#salidaAbdominales").html("Cantidad hecha: " + abdominales);
    var dataString = "nombre=" + nombre + "&abdominales=" + abdominales + "&update=";
    $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/actualizaAbdominales.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            document.getElementById("enviarAbdominal").innerHTML = "Enviando...";
          },
        success: function(data) {
          if (data == "success") {
            return $.mobile.changePage("#pruebas", {
                reverse: false,
                transition: "slide"
            });
          } else if (data == "error") {
              alert("error");
          }
      }
      });
}

function fondos(){
    var fondos=$('[name="cantidadFondos"]').val();
  
    window.localStorage.setItem("fondos", fondos);
    var nombre = window.localStorage.getItem("nombre");
    $("#salidaFondos").html("Cantidad hecha: " + fondos);
    var dataString = "nombre=" + nombre + "&fondos=" + fondos + "&update=";
    $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/actualizaFondos.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
            document.getElementById("enviarFondo").innerHTML = "Enviando...";
          },
        success: function(data) {
          if (data == "success") {
            return $.mobile.changePage("#pruebas", {
                reverse: false,
                transition: "slide"
            });
          } else if (data == "error") {
              alert("error");
          }
      }
      });
}