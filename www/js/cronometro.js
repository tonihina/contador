function comenzarF(){
        var reloj= document.getElementById("relojF");
          var flexiones= document.getElementById("flexionPrueba");
          flexiones.style.visibility="hidden";
          var flexionesA= document.getElementById("flexionAcabada");
          flexionesA.style.visibility="visible";
        reloj.style.backgroundColor="rgba(255,0,0,0.7)";
        cronometro(1);

    }

    function comenzarS(){
        var reloj= document.getElementById("relojS");
        var sentadillas= document.getElementById("sentadillaPrueba");
        sentadillas.style.visibility="hidden";
        var sentadillasA= document.getElementById("sentadillaAcabada");
        sentadillasA.style.visibility="visible";
        reloj.style.backgroundColor="rgba(255,0,0,0.7)";
        cronometro(2);

    }

    
    function comenzarA(){
      var reloj= document.getElementById("relojA");
      var abdominales= document.getElementById("abdominalesPrueba");
      abdominales.style.visibility="hidden";
      var abdominalesA= document.getElementById("abdominalesAcabada");
      abdominalesA.style.visibility="visible";
      reloj.style.backgroundColor="rgba(255,0,0,0.7)";
      cronometro(3);

  }

  function comenzarFo(){
    var reloj= document.getElementById("relojF");
    var fondos= document.getElementById("fondosPrueba");
    fondos.style.visibility="hidden";
    var fondosA= document.getElementById("fondosAcabada");
    fondosA.style.visibility="visible";
    reloj.style.backgroundColor="rgba(255,0,0,0.7)";
    cronometro(4);

}
    

    function cronometro(id){
      setTimeout(function() { 
        var time = 2; /* how long the timer will run (seconds) */
        var initialOffset = '440';
        var i = 1
        
        /* Need initial run as interval hasn't yet occured... */
        $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
        
        var interval = setInterval(function() {
            $('h2').text(30-i);
            if (i == time) {  	
              clearInterval(interval);
               
                $('h2').text("Comenzar");
                if(id==1){
                  var visible=document.getElementById("res");
                  visible.style.visibility="visible";
                }else if(id==2){
                  var visible=document.getElementById("resS");
                  visible.style.visibility="visible";
                }else if(id==3){
                  var visible=document.getElementById("resA");
                  visible.style.visibility="visible";
                }
                else if(id==4){
                  var visible=document.getElementById("resF");
                  visible.style.visibility="visible";
                }
                var audio = document.getElementById("audio");
                audio.play();
                
              return;
            }
            $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
            i++;  
        }, 1000);
        
        }, 0)
    }
  