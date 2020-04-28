   pantalla = document.getElementById("screen");

var isMarch = false; 
var acumularTime = 0; 
function start () {
         if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () { 
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime); 
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-18;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;} 
         if (mm < 10) {mm = "0"+mm;}
         if (hh < 10) {hh = "0"+hh;}
         pantalla.innerHTML =ss+" : "+cc;
         if (ss==03) {
            isMarch=true;
            stop();
            var visible=document.getElementById("res");
            visible.style.visibility="visible";
            var audio = document.getElementById("audio");
            audio.play();
            var nota=document.getElementById("nota");
            nota.style.visibility="hidden";
         }
         }

function stop () { 
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;

            } 
             
         }    


function resume () {
         if (isMarch == false) {
            timeActu2 = new Date();
            timeActu2 = timeActu2.getTime();
            acumularResume = timeActu2-acumularTime;
            
            timeInicial.setTime(acumularResume);
            control = setInterval(cronometro,10);
            isMarch = true;
            }     
         }

function reset () {
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }
         acumularTime = 0;
         pantalla.innerHTML = "00 : 00";
         }
function aumentoEjercicio(val) {
          document.getElementById('caja').value=val; 
          var muestra= document.getElementById("next");
          muestra.style.visibility="visible";
        }
function updateTextInput(val) {
          document.getElementById('textInput').value=val+"KG"; 
          var muestra= document.getElementById("siguientePregunta");
          muestra.style.visibility="visible";
        }
function valorAltura(val) {
          document.getElementById('inputAltura').value=val+"CM"; 
          var muestra= document.getElementById("preguntaDominada");
          muestra.style.visibility="visible";
          
        }
function valorDominada(val) {
          document.getElementById('cantidadDominada').value=val; 
          var muestra= document.getElementById("next");
          muestra.style.visibility="visible";
        }
function aparece(val) {
            var muestra= document.getElementById("recta");
            muestra.style.visibility="visible";
            var muestra2= document.getElementById("cantidadDominada");
            muestra2.style.visibility="visible";
            var muestra3= document.getElementById("preg");
            muestra3.style.visibility="visible";
            var muestra4= document.getElementById("next");
             muestra4.style.visibility="hidden";
 
        }
function desaparece(val) {
            var muestra5= document.getElementById("cantidadDominada");
            muestra5.style.visibility="hidden";
            var muestra3= document.getElementById("preg");
            muestra3.style.visibility="hidden";
            var muestra4= document.getElementById("next");
             muestra4.style.visibility="visible";
            var muestra= document.getElementById("recta");
            muestra.style.visibility="hidden";
            var muestra2= document.getElementById("valor");
            muestra2.style.visibility="hidden";
           
             
        }

function detenerAudio(){
   var audio = document.getElementById("audio");

            audio.paused(); 
}