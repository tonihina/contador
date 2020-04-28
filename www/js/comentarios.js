var usuario= localStorage.getItem("nombre");
var publicacion="";
function comentar(pu){
   
    publicacion=pu;

    $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/mostrarComentarios.php",
      cache: false,
      data: "publicacion="+publicacion,
      beforeSend: function() {
          $("#mostrarComentarios").text("Cargando...");
        },
      success: function(response)
      {
          $('#mostrarComentarios').html(response).fadeIn();
          
          $("#mostrarComentarios").listview("refresh");
  
      }
  });  

  

}

$("#comentar").click(function(){

    var comentario=$('[name="comentario"]').val();
    
    
    var Fcomentario = $("#comentario").val();

   
   
    
    var dataString = "comentario=" + Fcomentario +"&usuario=" + usuario +"&publicacion=" + publicacion;
    $.ajax({
      type:"POST",
      url: "https://mirutina21.000webhostapp.com/subirComentario.php",
      data: dataString,
      crossDomain: true,
      cache: false,
      beforeSend: function() {
        document.getElementById("comentar").innerHTML = "Enviando...";
      },
      success: function(data) {
        if (data == "success") {
          document.getElementById("comentar").innerHTML = "Enviar";
          var fMensaje = $("#comentario").val(" ");
            comentar(publicacion);
        } else if (data == "error") {
          alert("Error");
        }
    }
    });
    
  });