
$(function() {      
    $("#test").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
          $('h3').text(localStorage.getItem("nombre"));
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test2").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="down") {
          location.reload();
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test3").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test4").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="right") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="280px";
        }else{
            var menu=document.getElementById("menu");
            menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#test5").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="down") {
          
          $( "#panl" ).panel( "open" );
         
        }
      },
      threshold:0,
      fingers:'all'
    });
  });
  $(function() {      
    $("#mano").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        
        if (direction=="left") {
          var menu=document.getElementById("menu");
          menu.style.marginLeft="0px";
        }
      },
      threshold:0,
      fingers:'all'
    });
  });

  $( function() {
    $( "#panl" ).panel();
    } );
    $(function(){
      $("#act").click(function(){
        location.reload();
        
      });
      
    });
  function menu(){
   
      var menu=document.getElementById("menu");
      menu.style.marginLeft="280px";
      $('h3').text(localStorage.getItem("nombre"));
  }

  function recargar(pagina){
    $.mobile.changePage(pagina,{ transition: "slideup", changeHash: true, reverse: false});
    var dirName = $.mobile.path.get( $( this ).attr( "value" ) );
    
    
    
  }

  
  function cambiar(pagina){
    window.location.replace(pagina);
  }

  function launchFullScreen(element) {
    if(element.requestFullScreen) {
      element.requestFullScreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  // Lanza en pantalla completa en navegadores que lo soporten
   function cancelFullScreen() {
       if(document.cancelFullScreen) {
           document.cancelFullScreen();
       } else if(document.mozCancelFullScreen) {
           document.mozCancelFullScreen();
       } else if(document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
       }
   }


   $(document).ready(function() {
    $( document ).on( "swipeleft swiperight", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});
   
