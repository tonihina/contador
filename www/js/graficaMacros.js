$(document).ready(function() {
    var requerimientoDiario=localStorage.getItem("requerimiento");
    var carbosDiarios=localStorage.getItem("carbos");
    var proteDiarias=localStorage.getItem("prote");
    var grasasDiarias=localStorage.getItem("grasas");
  var usuario=localStorage.getItem("nombre");
  var macrosTodo = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contarMacrosDiarios.php",
      data: macrosTodo,
      cache: false,
      beforeSend: function() {
          $("#macrosDiarios").text("Cargando...");
        },
      success: function(response)
      {
          $('#gramosMacrosDiarios').html("<td> / "+ localStorage.getItem("carbos")+" g </td><td> / "+ 
          localStorage.getItem("prote")+" g </td><td>/ "+ localStorage.getItem("grasas")+" g </td>").fadeIn();
          $('#macrosDiarios').html(response).fadeIn();
          $("#macrosDiarios").listview("refresh");
       
         
      }
});
var popCanvas = $("#graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: {
labels: ["Carbohidratos" , 
     "Proteinas", 
     "Grasas"],
datasets: [{
label: 'Macronutrientes diarios',
data: [10, 10, 10],
backgroundColor: [
'rgba(229, 31, 31)',
'rgba(54, 162, 235, 0.6)',
'rgba(255, 206, 86, 0.6)'
]
}]
},
options: {
title: {
display: true,
text: '',
legend: {
display: true,
labels: {
    fontColor: 'rgb(255, 99, 132)'
}
}
}
}
});
});
