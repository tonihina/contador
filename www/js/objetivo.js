function objetivo(objetivo){
  var contenedor = document.getElementById('contenedor_carga');
  contenedor.style.visibility = 'visible';
  contenedor.style.opacity = '1';
    window.localStorage.setItem("objetivo",objetivo);
    var nombre = window.localStorage.getItem("nombre");
    var dataString = "nombre=" + nombre + "&objetivo=" + objetivo + "&update=";
    $.ajax({
        type:"POST", 
        url: "https://mirutina21.000webhostapp.com/actualizaObjetivo.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        success: function(data) {
          if (data == "success") {
            window.location.replace("principal.html");
          } else if (data == "error") {
              alert("error");
          }
      }
      });
}