$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/mostrarComunidad.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestaUsuarios").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestaUsuarios').html(response).fadeIn();
                $("#muestaUsuarios").listview("refresh");

                
               
            }
    });

});

$(document).ready(function() {
    $('h3').text(localStorage.getItem("nombre"));
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/mostrarImagen.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#fotoPerfil").text("Cargando...");
              },
            success: function(response)
            {
                $('#fotoPerfil').html(response).fadeIn();
                $("#fotoPerfil").listview("refresh");
                
            }
    });

});
var usuarioDesti="";
var usuarioRemi=localStorage.getItem("nombre");

function mensajea(destinatario){
    $.mobile.changePage("#mensajes",{ transition: "slideup", changeHash: true});
    usuarioDesti=destinatario; 
  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/yalolei.php",
    cache: false,
    data: "nombre="+localStorage.getItem("nombre")+"&remitente="+destinatario,
  
    success: function(response)
    {
        refrescar(); 
    }
  });
    /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

}



$("#enviarMensaje").click(function(){

  var mensaje=$('[name="mensaje"]').val();
  
  
  var fMensaje = $("#mensaje").val();
 
  
  var dataString = "mensaje=" + fMensaje +"&destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi;
  $.ajax({
    type:"POST",
    url: "https://mirutina21.000webhostapp.com/mandarMensaje.php",
    data: dataString,
    crossDomain: true,
    cache: false,
    beforeSend: function() {
      document.getElementById("enviarMensaje").innerHTML = "Enviando...";
    },
    success: function(data) {
      if (data == "success") {
        document.getElementById("enviarMensaje").innerHTML = "Enviar";
        var fMensaje = $("#mensaje").val(" ");
        refrescar();
      } else if (data == "error") {
        alert("Error");
      }
  }
  });
  
});

$("#actua").click(function(){

  refrescar();
  
});

$("#mensajes").on("pageshow", function(){ 
     
  $.ajax({
  type: "POST",
  url: "https://mirutina21.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi+ "&nombre=" + localStorage.getItem("nombre"),
  beforeSend: function() {
      $("#muestradeMensajes").text("Cargando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");    
  }
});
  /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

});


$(document).on("pageinit", "#comunidad", function () {
  $("div[role=main]").on("swipeleft", function (event) {
      changeNavTab(true);
  });

  $("div[role=main]").on("swiperight", function (event) {
      changeNavTab(false);
  });
});

function changeNavTab(left) {
  var $tabs = $('ul[data-role="nd2tabs"] li');
  console.log($tabs);
  var len = $tabs.length;
  var curidx = 0;
  $tabs.each(function(idx){
    if ($(this).hasClass("nd2Tabs-active")){
        curidx = idx;
      }
  });
  
  var nextidx = 0;
  if (left) {
      nextidx =  curidx + .5;
  } else {
      nextidx =  curidx - .5;
  }
  $tabs.eq(nextidx).click();

}
$( document ).on( "pageinit", "#inicio", function() {
  $( document ).on( "swipeleft swiperight", "#inicio", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#rutina", function() {
  $( document ).on( "swipeleft swiperight", "#rutina", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#ejercicios", function() {
  $( document ).on( "swipeleft swiperight", "#ejercicios", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#articulos", function() {
  $( document ).on( "swipeleft swiperight", "#articulos", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#videos", function() {
  $( document ).on( "swipeleft swiperight", "#videos", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#mprin", function() {
  $( document ).on( "swipeleft swiperight", "#mprin", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#prin", function() {
  $( document ).on( "swipeleft swiperight", "#prin", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#inter", function() {
  $( document ).on( "swipeleft swiperight", "#inter", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#avan", function() {
  $( document ).on( "swipeleft swiperight", "#avan", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#comunidad", function() {
  $( document ).on( "swipeleft swiperight", "#comunidad", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#datos", function() {
  $( document ).on( "swipeleft swiperight", "#datos", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#mensajes", function() {
  $( document ).on( "swipeleft swiperight", "#mensajes", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#mensajesPanel", function() {
  $( document ).on( "swipeleft swiperight", "#mensajesPanel", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#miPlanAlimenticio", function() {
  $( document ).on( "swipeleft swiperight", "#miPlanAlimenticio", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
function abrirPanel(){
  $( "#mypanel" ).panel( "open" );
}
$( document ).on( "pageinit", "#retos", function() {
  $( document ).on( "swipeleft swiperight", "#retos", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});
$( document ).on( "pageinit", "#detalleRetos", function() {
  $( document ).on( "swipeleft swiperight", "#detalleRetos", function( e ) {
    refrescar(); 
      // We check if there is no open panel on the page because otherwise
      // a swipe to close the left panel would also open the right panel (and v.v.).
      // We do this by checking the data that the framework stores on the page element (panel: open).
      if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
          
            if ( e.type === "swiperight" ) {
             
              $( "#mypanel" ).panel( "open" );
              
          }
      }
  });
});


$("#mensajesPanel").on("pageshow", function(){ 
     
$.ajax({
  type: "POST",
  url: "https://mirutina21.000webhostapp.com/yalolei.php",
  cache: false,
  data: "nombre="+localStorage.getItem("nombre"),

  success: function(response)
  {
      refrescar(); 
  }
});
  /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/

});



$("#inicio").on("pageshow", function(){ 
     var inicio=document.getElementById("estoyInicio");
    inicio.style.backgroundColor="red";
  
  });

  $("#mensajes").on("pageshow", function(){ 
   refrescar();
 
 });

  $("#rutina").on("pageshow", function(){ 
    var inicio=document.getElementById("estoyRutina");
   inicio.style.backgroundColor="red";
 
 });
 $("#ejercicios").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyEjercicios");
 inicio.style.backgroundColor="red";

});
$("#articulos").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyArticulos");
 inicio.style.backgroundColor="red";

});
$("#videos").on("pageshow", function(){ 
  var inicio=document.getElementById("estoyVideos");
 inicio.style.backgroundColor="red";

});

function refrescar(){
  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/mensajes.php",
    cache: false,
    data: "nombre="+localStorage.getItem("nombre"),
  
    success: function(response)
    {
        $('#mns').html(response).fadeIn();
        $("#mns").listview("refresh");
    }
});

    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/mensajesPanel.php",
            cache: false,
            data: "nombre="+localStorage.getItem("nombre"),
            beforeSend: function() {
                $("#muestradeMensajesPanel").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestradeMensajesPanel').html(response).fadeIn();
                $("#muestradeMensajesPanel").listview("refresh");
                
            }
    });

$.ajax({
  type: "POST",
  url: "https://mirutina21.000webhostapp.com/mostrarMensajes.php",
  cache: false,
  data: "destinatario=" + usuarioDesti +"&remitente=" + usuarioRemi + "&nombre=" + localStorage.getItem("nombre"),
  beforeSend: function() {
      $("#muestradeMensajes").text("cargando...");
    },
  success: function(response)
  {
      $('#muestradeMensajes').html(response).fadeIn();
      $("#muestradeMensajes").listview("refresh");   
  }
});

}





