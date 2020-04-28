var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


output.innerHTML = slider.value + " Flexiones";


slider.oninput = function() {
  output.innerHTML = this.value + " Flexiones";
 
}

var miR = document.getElementById("miRango");
var salida = document.getElementById("valor");

salida.innerHTML = miR.value + " Sentadillas";

miR.oninput = function() {
  salida.innerHTML = this.value + " Sentadillas";

}

var rangoDominada = document.getElementById("recta");
var salir = document.getElementById("salida");
salir.innerHTML = rangoDominada.value+" Dominadas";

rangoDominada.oninput = function() {
  salir.innerHTML = this.value+" Dominadas";
}