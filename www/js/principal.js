$(document).ready(function() {
  document.getElementById("estoyInicio").innerHTML="Inicio";
  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mostrarImagen.php",
    cache: false,
    data: "nombre="+localStorage.getItem("nombre"),
    beforeSend: function() {
        $("#fotoPublicar").text("Cargando...");
      },
    success: function(response)
    {
        $('#fotoPublicar').html(response+" Hola "+localStorage.getItem("nombre")+" publica algo").fadeIn();
        
        $("#fotoPublicar").listview("refresh");

    }
});  

});

$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mostrarPublicaciones.php",
    cache: false,
    beforeSend: function() {
      $(".show-page-loading-msg").get(0).click();
      },
    success: function(response)
    {
        $('#mostrarPublicaciones').html(response).fadeIn();
        
        $("#mostrarPublicaciones").listview("refresh");
        $(".hide-page-loading-msg").get(0).click();

    }
});  

});

$(document).ready(function() {

  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mostrarRetos.php",
    cache: false,
    success: function(response)
    {
        $('#momstrarRetos').html(response).fadeIn();
        
        $("#momstrarRetos").listview("refresh");
       

    }
});  

});


$(function(){
  $("#botonPublicarHistoria").on("click", function(){
      var formData = new FormData($("#historiaSubirAservidor")[0]);
      var ruta = "https://mirutina21.000webhostapp.com/subirHistoria.php";
      $.ajax({
          url: ruta,
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
          beforeSend: function() {
            var contenedor = document.getElementById('contenedor_carga');
            contenedor.style.visibility = 'visible';
            contenedor.style.opacity = '1';
          },
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

$(function(){
  $("#botonPublicar").on("click", function(){
    var formData = new FormData($("#publicarAlgo")[0]);
    
    var ruta = "https://mirutina21.000webhostapp.com/subirPublicacion.php";

    $.ajax({
        url: ruta,
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        beforeSend: function() {
          var contenedor = document.getElementById('contenedor_carga');
          contenedor.style.visibility = 'visible';
          contenedor.style.opacity = '1';
        },
        success: function(datos)
        {
          if(datos=="success"){
            window.location.replace("principal.html");
          }
          else{
            
          }
        
        }
    });
    
  });
});

$(document).ready(function() {
  $.ajax({
          type: "POST",
          url: "https://mirutina21.000webhostapp.com/mostrarHistorias.php",
          cache: false,
         
          beforeSend: function() {
              $("#historiasTodas").text("Cargando...");
            },
          success: function(response)
          {
              $('#historiasTodas').html(response).fadeIn();
              $("#historiasTodas").listview("refresh");

              
             
          }
  });

});

$( document ).on( "click", ".show-page-loading-msg", function() {
  var $this = $( this ),
      theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
      msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
      textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
      textonly = !!$this.jqmData( "textonly" );
      html = $this.jqmData( "html" ) || "";
  $.mobile.loading( "show", {
          text: msgText,
          textVisible: textVisible,
          theme: theme,
          textonly: textonly,
          html: html
  });
})
.on( "click", ".hide-page-loading-msg", function() {
  $.mobile.loading( "hide" );
});



  $(function() {
   $('#publicacionImagen').change(function(e) {
       addImage(e); 
      });
 
      function addImage(e){
       var file = e.target.files[0],
       imageType = /image.*/;
     
       if (!file.type.match(imageType))
        return;
   
       var reader = new FileReader();
   
       reader.onload = function(e){
          var result=e.target.result;
          document.getElementById("imgpublicar").style.display="block";
         $('#imgpublicar').attr("src",result);
         document.getElementById("botonPublicar").style.display="block";
       }
        
       reader.readAsDataURL(file);
      }
     });

     $(function() {
      $('#imagenHistoria').change(function(e) {
          addImage(e); 
         });
    
         function addImage(e){
          var file = e.target.files[0],
          imageType = /image.*/;
        
          if (!file.type.match(imageType))
           return;
      
          var reader = new FileReader();
      
          reader.onload = function(e){
             var result=e.target.result;
             document.getElementById("imgSalida").style.display="block";
            $('#imgSalida').attr("src",result);
            document.getElementById("botonPublicarHistoria").style.display="block";
          }
           
          reader.readAsDataURL(file);
         }
        });
  
function detalleHistoria(usuario){
  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mostrarDetalleHistoria.php",
    cache: false,
    data: "nombre="+usuario,
    beforeSend: function() {
        $("#mostrarDetalleHistoria").text("Cargando...");
      },
    success: function(response)
    {
        $('#mostrarDetalleHistoria').html(response).fadeIn();
       
       
    }
});  
}
 
function salir(){
  localStorage.clear();
  window.location.replace("index.html");
}


    





function verDetalleHis(usuario) {
  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mostrarDetalleHistoria.php",
    data: "nombre="+usuario,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      var i=0;
      var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array

var items = [
    {
        src: 'https://mirutina21.000webhostapp.com/historias/'+data[i].imagen,
        w: 600,
        h: 400
    }
];
i++;
while(data[i]!=null){
    items.push({
      src: 'https://mirutina21.000webhostapp.com/historias/'+data[i].imagen,
      w: 600,
      h: 400
  });
  i++;
}

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
    
       
    }
});

}

