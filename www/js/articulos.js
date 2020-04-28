

$(document).ready(function() {

    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/mostrarArticulos.php",
            cache: false,
            beforeSend: function() {
                $("#mostrarArticulos").text("Cargando...");
              },
            success: function(response)
            {
                $('#mostrarArticulos').html(response).fadeIn();
                $("#mostrarArticulos").listview("refresh");

                
               
            }
    });

});


$(function(){
  $("#insertarArticulo").on("click", function(){
      var formData = new FormData($("#articulosEnviar")[0]);
      var ruta = "https://mirutina21.000webhostapp.com/subirArticulo.php";
      $.ajax({
          url: ruta,
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
         
          success: function(datos)
          {
            if(datos=="success"){
              window.location.reload();
            }
            else{
              
            }
          
          }
      });
  });
});


function verArticulo(articulo){

    $.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contenidoArticulo.php",
        cache: false,
        data: "id="+articulo,
        beforeSend: function() {
            $("#contenidoArticulo").text("Cargando...");
           
          },
        success: function(response)
        {
            $('#contenidoArticulo').html(response).fadeIn();
            $("#contenidoArticulo").listview("refresh");
         
          
        }
    });
}
