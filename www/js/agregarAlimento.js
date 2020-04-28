
$(function(){
    $("#guardarAlimento").click(function(){
      var porcion=$('[name="porcion"]').val();
     
        
      
      
      var fPorcion = $("#porcion").val();

      var usuario=localStorage.getItem("nombre");
      var comida=localStorage.getItem("comida");
      var alimentoActual=localStorage.getItem("alimentoActual");
      
      var dataString = "porcion=" + fPorcion + "&usuario=" + usuario +  "&comida=" + comida +  "&alimento=" + alimentoActual ;
      $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/insertarComida.php",
        data: dataString,
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("guardarAlimento").innerHTML = "Conectando...";
        },
        success: function(data) {
          if (data == "success") {
            alert("Alimento agregado");
            document.getElementById("guardarAlimento").innerHTML = "Agregar";
            contarCaloriasYmacros();
          } else if (data == "error") {
            document.getElementById("guardarAlimento").innerHTML = "Error";
          }
      }
      });
      
    });
    
  });
  var fecha;
  function actualizaFecha(){
    fecha = $("#fecha").val();
  

    contarCaloriasYmacros();
  }

  

  $(document).ready(function() {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('fecha').value=ano+"-"+mes+"-"+dia;
    fecha = $("#fecha").val();
    
    var requerimientoDiario=localStorage.getItem("requerimiento");
    var carbosDiarios=localStorage.getItem("carbos");
    var proteDiarias=localStorage.getItem("prote");
    var grasasDiarias=localStorage.getItem("grasas");
  var usuario=localStorage.getItem("nombre");
  var caloriasTotales = "usuario=" + usuario + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
  $.ajax({
          type: "POST",
          url: "https://mirutina21.000webhostapp.com/caloriasTotales.php",
          data: caloriasTotales,
          cache: false,
          beforeSend: function() {
              $("#caloriasTotales").text("Cargando...");
            },
          success: function(response)
          {
              $('#caloriasTotales').html(response+" / "+localStorage.getItem("requerimiento")+" Kcal.").fadeIn();
              $("#caloriasTotales").listview("refresh");
             
          }
  });
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
  var usuario=localStorage.getItem("nombre");
  var dataString = "usuario=" + usuario +  "&comida=" + "desayuno" + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
  $.ajax({
          type: "POST",
          url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
          data: dataString,
          cache: false,
          beforeSend: function() {
              $("#contarCaloriasDesayuno").text("Cargando...");
            },
          success: function(response)
          {
              $('#contarCaloriasDesayuno').html(response).fadeIn();
              $("#contarCaloriasDesayuno").listview("refresh");
             
          }
  });
  var usuario=localStorage.getItem("nombre");
  var macrosD = "usuario=" + usuario +  "&comida=" + "desayuno" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
      data: macrosD,
      cache: false,
      beforeSend: function() {
          $("#macrosDesayuno").text("Cargando...");
        },
      success: function(response)
      {
          $('#macrosDesayuno').html(response).fadeIn();
          $("#macrosDesayuno").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "desayuno" + "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
      data: detalleDesayuno,
      cache: false,
      beforeSend: function() {
          $("#detalleDesayuno").text("Cargando...");
        },
      success: function(response)
      {
          $('#detalleDesayuno').html(response).fadeIn();
          $("#detalleDesayuno").listview("refresh");
         
      }
});
  var usuario=localStorage.getItem("nombre");
  var comidaC = "usuario=" + usuario +  "&comida=" + "comida"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
  $.ajax({
          type: "POST",
          url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
          data: comidaC,
          cache: false,
          beforeSend: function() {
              $("#contarCaloriasComida").text("Cargando...");
            },
          success: function(response)
          {
              $('#contarCaloriasComida').html(response).fadeIn();
              $("#contarCaloriasComida").listview("refresh");
             
          }
  });
  var usuario=localStorage.getItem("nombre");
  var macrosCom = "usuario=" + usuario +  "&comida=" + "comida"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
      data: macrosCom,
      cache: false,
      beforeSend: function() {
          $("#macrosComida").text("Cargando...");
        },
      success: function(response)
      {
          $('#macrosComida').html(response).fadeIn();
          $("#macrosComida").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "comida" + "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
      data: detalleDesayuno,
      cache: false,
      beforeSend: function() {
          $("#detalleComida").text("Cargando...");
        },
      success: function(response)
      {
          $('#detalleComida').html(response).fadeIn();
          $("#detalleComida").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "cena"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
      data: cenaC,
      cache: false,
      beforeSend: function() {
          $("#contarCaloriasCena").text("Cargando...");
        },
      success: function(response)
      {
          $('#contarCaloriasCena').html(response).fadeIn();
          $("#contarCaloriasCena").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
  var macrosCena = "usuario=" + usuario +  "&comida=" + "cena" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
      data: macrosCena,
      cache: false,
      beforeSend: function() {
          $("#macrosCena").text("Cargando...");
        },
      success: function(response)
      {
          $('#macrosCena').html(response).fadeIn();
          $("#macrosCena").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "cena" + "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
      data: detalleDesayuno,
      cache: false,
      beforeSend: function() {
          $("#detalleCena").text("Cargando...");
        },
      success: function(response)
      {
          $('#detalleCena').html(response).fadeIn();
          $("#detalleCena").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "snacks"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
      data: cenaC,
      cache: false,
      beforeSend: function() {
          $("#contarCaloriasSnacks").text("Cargando...");
        },
      success: function(response)
      {
          $('#contarCaloriasSnacks').html(response).fadeIn();
          $("#contarCaloriasSnacks").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
  var macrosCena = "usuario=" + usuario +  "&comida=" + "snacks"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
      data: macrosCena,
      cache: false,
      beforeSend: function() {
          $("#macrosSnacks").text("Cargando...");
        },
      success: function(response)
      {
          $('#macrosSnacks').html(response).fadeIn();
          $("#macrosSnacks").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var detalleSnacks = "usuario=" + usuario +  "&comida=" + "snacks" + "&fecha="+fecha;
$.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
      data: detalleSnacks,
      cache: false,
      beforeSend: function() {
          $("#detalleSnacks").text("Cargando...");
        },
      success: function(response)
      {
          $('#detalleSnacks').html(response).fadeIn();
          $("#detalleSnacks").listview("refresh");
         
      }
});
var usuario=localStorage.getItem("nombre");
var graficarCarbosDiarios;
var graficaProteDiarias;
var graficaGrasasDiarias;
var graficaMacrosTodo = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
$.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/macrosTotalesGrafica.php",
    data: graficaMacrosTodo,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      graficarCarbosDiarios=data.carbo;
      graficaProteDiarias=data.prote;
      graficaGrasasDiarias=data.grasas;
      var MAcrosDiarios = {
        label: 'Macros Diarios',
        data: [carbosDiarios, proteDiarias, grasasDiarias],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
       
      };
      var macrosConteo = {
        label: 'Conteo de macros',
        data: [graficarCarbosDiarios, graficaProteDiarias, graficaGrasasDiarias],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderColor: 'rgba(99, 132, 0, 1)',
        
      };
      var dataMacros = {
        labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
        color: [
          'rgba(229, 31, 31)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        datasets: [MAcrosDiarios, macrosConteo]
      };
      var chartOptions = {
        events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
        animation: { duration: 1, onComplete: function () { 
          var chartInstance = this.chart, ctx = chartInstance.ctx;
           ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                 meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
      };
      var popCanvas = $("#graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: dataMacros,
options: chartOptions,

});
       
    }
});

var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
grasasDiarias +  "&comida=" + "desayuno" + "&fecha="+fecha;
$.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
    data: graficaMacrosComida,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      graficarCarbosComida=data.carbo;
      graficaProteComida=data.prote;
      graficaGrasasComida=data.grasas;
      var MAcrosDiarios = {
        label: 'Macros Totales',
        data: [carbosDiarios, proteDiarias, grasasDiarias],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
       
      };
      var macrosConteo = {
        label: 'Macros consumidos',
        data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderColor: 'rgba(99, 132, 0, 1)',
        
      };
      var dataMacros = {
        labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
        color: [
          'rgba(229, 31, 31)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        datasets: [MAcrosDiarios, macrosConteo]
      };
      var chartOptions = {
        events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
        animation: { duration: 1, onComplete: function () { 
          var chartInstance = this.chart, ctx = chartInstance.ctx;
           ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                 meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
      };
      var popCanvas = $("#graficaMacrosDesayuno");
var popCanvas = document.getElementById("graficaMacrosDesayuno");
var popCanvas = document.getElementById("graficaMacrosDesayuno").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: dataMacros,
options: chartOptions,

});
       
    }
});


var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
grasasDiarias +  "&comida=" + "comida" + "&fecha="+fecha;
$.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
    data: graficaMacrosComida,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      graficarCarbosComida=data.carbo;
      graficaProteComida=data.prote;
      graficaGrasasComida=data.grasas;
      var MAcrosDiarios = {
        label: 'Macros Totales',
        data: [carbosDiarios, proteDiarias, grasasDiarias],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
       
      };
      var macrosConteo = {
        label: 'Macros consumidos',
        data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderColor: 'rgba(99, 132, 0, 1)',
        
      };
      var dataMacros = {
        labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
        color: [
          'rgba(229, 31, 31)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        datasets: [MAcrosDiarios, macrosConteo]
      };
      var chartOptions = {
        events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
        animation: { duration: 1, onComplete: function () { 
          var chartInstance = this.chart, ctx = chartInstance.ctx;
           ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                 meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
      };
      var popCanvas = $("#graficaMacrosComida");
var popCanvas = document.getElementById("graficaMacrosComida");
var popCanvas = document.getElementById("graficaMacrosComida").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: dataMacros,
options: chartOptions,

});
       
    }
});



var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
grasasDiarias +  "&comida=" + "cena" + "&fecha="+fecha;
$.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
    data: graficaMacrosComida,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      graficarCarbosComida=data.carbo;
      graficaProteComida=data.prote;
      graficaGrasasComida=data.grasas;
      var MAcrosDiarios = {
        label: 'Macros Totales',
        data: [carbosDiarios, proteDiarias, grasasDiarias],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
       
      };
      var macrosConteo = {
        label: 'Macros consumidos',
        data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderColor: 'rgba(99, 132, 0, 1)',
        
      };
      var dataMacros = {
        labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
        color: [
          'rgba(229, 31, 31)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        datasets: [MAcrosDiarios, macrosConteo]
      };
      var chartOptions = {
        events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
        animation: { duration: 1, onComplete: function () { 
          var chartInstance = this.chart, ctx = chartInstance.ctx;
           ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                 meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
      };
      var popCanvas = $("#graficaMacrosCena");
var popCanvas = document.getElementById("graficaMacrosCena");
var popCanvas = document.getElementById("graficaMacrosCena").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: dataMacros,
options: chartOptions,

});
       
    }
});


var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
grasasDiarias +  "&comida=" + "snacks" + "&fecha="+fecha;
$.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
    data: graficaMacrosComida,
    dataType:"JSON",
    crossDomain: true,
    cache: false,
    success: function(data)
    {
      graficarCarbosComida=data.carbo;
      graficaProteComida=data.prote;
      graficaGrasasComida=data.grasas;
      var MAcrosDiarios = {
        label: 'Macros Totales',
        data: [carbosDiarios, proteDiarias, grasasDiarias],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderColor: 'rgba(0, 99, 132, 1)',
       
      };
      var macrosConteo = {
        label: 'Macros consumidos',
        data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderColor: 'rgba(99, 132, 0, 1)',
        
      };
      var dataMacros = {
        labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
        color: [
          'rgba(229, 31, 31)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        datasets: [MAcrosDiarios, macrosConteo]
      };
      var chartOptions = {
        events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
        animation: { duration: 1, onComplete: function () { 
          var chartInstance = this.chart, ctx = chartInstance.ctx;
           ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
              Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
               this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                 meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
      };
      var popCanvas = $("#graficaMacrosSnacks");
var popCanvas = document.getElementById("graficaMacrosSnacks");
var popCanvas = document.getElementById("graficaMacrosSnacks").getContext("2d");
var barChart = new Chart(popCanvas, {
type: 'bar',
data: dataMacros,
options: chartOptions,

});
       
    }
});

});

  function contarCaloriasYmacros(){
    
      var requerimientoDiario=localStorage.getItem("requerimiento");
      var carbosDiarios=localStorage.getItem("carbos");
      var proteDiarias=localStorage.getItem("prote");
      var grasasDiarias=localStorage.getItem("grasas");
    var usuario=localStorage.getItem("nombre");
    var caloriasTotales = "usuario=" + usuario + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/caloriasTotales.php",
            data: caloriasTotales,
            cache: false,
            beforeSend: function() {
                $("#caloriasTotales").text("Cargando...");
              },
            success: function(response)
            {
                $('#caloriasTotales').html(response+" / "+localStorage.getItem("requerimiento")+" Kcal.").fadeIn();
                $("#caloriasTotales").listview("refresh");
               
            }
    });
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
    var usuario=localStorage.getItem("nombre");
    var dataString = "usuario=" + usuario +  "&comida=" + "desayuno" + "&requerimiento=" + requerimientoDiario + "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
            data: dataString,
            cache: false,
            beforeSend: function() {
                $("#contarCaloriasDesayuno").text("Cargando...");
              },
            success: function(response)
            {
                $('#contarCaloriasDesayuno').html(response).fadeIn();
                $("#contarCaloriasDesayuno").listview("refresh");
               
            }
    });
    var usuario=localStorage.getItem("nombre");
    var macrosD = "usuario=" + usuario +  "&comida=" + "desayuno" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
        data: macrosD,
        cache: false,
        beforeSend: function() {
            $("#macrosDesayuno").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosDesayuno').html(response).fadeIn();
            $("#macrosDesayuno").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "desayuno" + "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
        data: detalleDesayuno,
        cache: false,
        beforeSend: function() {
            $("#detalleDesayuno").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleDesayuno').html(response).fadeIn();
            $("#detalleDesayuno").listview("refresh");
           
        }
});
    var usuario=localStorage.getItem("nombre");
    var comidaC = "usuario=" + usuario +  "&comida=" + "comida"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
            data: comidaC,
            cache: false,
            beforeSend: function() {
                $("#contarCaloriasComida").text("Cargando...");
              },
            success: function(response)
            {
                $('#contarCaloriasComida').html(response).fadeIn();
                $("#contarCaloriasComida").listview("refresh");
               
            }
    });
    var usuario=localStorage.getItem("nombre");
    var macrosCom = "usuario=" + usuario +  "&comida=" + "comida"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
        data: macrosCom,
        cache: false,
        beforeSend: function() {
            $("#macrosComida").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosComida').html(response).fadeIn();
            $("#macrosComida").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "comida" + "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
        data: detalleDesayuno,
        cache: false,
        beforeSend: function() {
            $("#detalleComida").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleComida').html(response).fadeIn();
            $("#detalleComida").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "cena"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
        data: cenaC,
        cache: false,
        beforeSend: function() {
            $("#contarCaloriasCena").text("Cargando...");
          },
        success: function(response)
        {
            $('#contarCaloriasCena').html(response).fadeIn();
            $("#contarCaloriasCena").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
    var macrosCena = "usuario=" + usuario +  "&comida=" + "cena" + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
        data: macrosCena,
        cache: false,
        beforeSend: function() {
            $("#macrosCena").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosCena').html(response).fadeIn();
            $("#macrosCena").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var detalleDesayuno = "usuario=" + usuario +  "&comida=" + "cena" + "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
        data: detalleDesayuno,
        cache: false,
        beforeSend: function() {
            $("#detalleCena").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleCena').html(response).fadeIn();
            $("#detalleCena").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var cenaC = "usuario=" + usuario +  "&comida=" + "snacks"  + "&requerimiento=" + requerimientoDiario+ "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contarCalorias.php",
        data: cenaC,
        cache: false,
        beforeSend: function() {
            $("#contarCaloriasSnacks").text("Cargando...");
          },
        success: function(response)
        {
            $('#contarCaloriasSnacks').html(response).fadeIn();
            $("#contarCaloriasSnacks").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
    var macrosCena = "usuario=" + usuario +  "&comida=" + "snacks"+ "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias+ "&fecha="+fecha;
    $.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/contadorMacros.php",
        data: macrosCena,
        cache: false,
        beforeSend: function() {
            $("#macrosSnacks").text("Cargando...");
          },
        success: function(response)
        {
            $('#macrosSnacks').html(response).fadeIn();
            $("#macrosSnacks").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var detalleSnacks = "usuario=" + usuario +  "&comida=" + "snacks" + "&fecha="+fecha;
$.ajax({
        type: "POST",
        url: "https://mirutina21.000webhostapp.com/detalleDesayuno.php",
        data: detalleSnacks,
        cache: false,
        beforeSend: function() {
            $("#detalleSnacks").text("Cargando...");
          },
        success: function(response)
        {
            $('#detalleSnacks').html(response).fadeIn();
            $("#detalleSnacks").listview("refresh");
           
        }
});
var usuario=localStorage.getItem("nombre");
var graficarCarbosDiarios;
var graficaProteDiarias;
var graficaGrasasDiarias;
  var graficaMacrosTodo = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + grasasDiarias + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/macrosTotalesGrafica.php",
      data: graficaMacrosTodo,
      dataType:"JSON",
      crossDomain: true,
      cache: false,
      success: function(data)
      {
        graficarCarbosDiarios=data.carbo;
        graficaProteDiarias=data.prote;
        graficaGrasasDiarias=data.grasas;
        var MAcrosDiarios = {
          label: 'Macros Diarios',
          data: [carbosDiarios, proteDiarias, grasasDiarias],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
         
        };
        var macrosConteo = {
          label: 'Conteo de macros',
          data: [graficarCarbosDiarios, graficaProteDiarias, graficaGrasasDiarias],
          backgroundColor: 'rgba(99, 132, 0, 0.6)',
          borderColor: 'rgba(99, 132, 0, 1)',
          
        };
        var dataMacros = {
          labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
          color: [
            'rgba(229, 31, 31)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          datasets: [MAcrosDiarios, macrosConteo]
        };
        var chartOptions = {
          events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
          animation: { duration: 1, onComplete: function () { 
            var chartInstance = this.chart, ctx = chartInstance.ctx;
             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                 this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                   meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
        };
        var popCanvas = $("#graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios");
var popCanvas = document.getElementById("graficaMacrosDiarios").getContext("2d");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: dataMacros,
  options: chartOptions,
  
});
         
      }
});

var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
  var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
  grasasDiarias +  "&comida=" + "desayuno" + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
      data: graficaMacrosComida,
      dataType:"JSON",
      crossDomain: true,
      cache: false,
      success: function(data)
      {
        graficarCarbosComida=data.carbo;
        graficaProteComida=data.prote;
        graficaGrasasComida=data.grasas;
        var MAcrosDiarios = {
          label: 'Macros Totales',
          data: [carbosDiarios, proteDiarias, grasasDiarias],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
         
        };
        var macrosConteo = {
          label: 'Macros consumidos',
          data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
          backgroundColor: 'rgba(99, 132, 0, 0.6)',
          borderColor: 'rgba(99, 132, 0, 1)',
          
        };
        var dataMacros = {
          labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
          color: [
            'rgba(229, 31, 31)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          datasets: [MAcrosDiarios, macrosConteo]
        };
        var chartOptions = {
          events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
          animation: { duration: 1, onComplete: function () { 
            var chartInstance = this.chart, ctx = chartInstance.ctx;
             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                 this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                   meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
        };
        var popCanvas = $("#graficaMacrosDesayuno");
var popCanvas = document.getElementById("graficaMacrosDesayuno");
var popCanvas = document.getElementById("graficaMacrosDesayuno").getContext("2d");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: dataMacros,
  options: chartOptions,
  
});
         
      }
});


var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
  var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
  grasasDiarias +  "&comida=" + "comida" + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
      data: graficaMacrosComida,
      dataType:"JSON",
      crossDomain: true,
      cache: false,
      success: function(data)
      {
        graficarCarbosComida=data.carbo;
        graficaProteComida=data.prote;
        graficaGrasasComida=data.grasas;
        var MAcrosDiarios = {
          label: 'Macros Totales',
          data: [carbosDiarios, proteDiarias, grasasDiarias],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
         
        };
        var macrosConteo = {
          label: 'Macros consumidos',
          data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
          backgroundColor: 'rgba(99, 132, 0, 0.6)',
          borderColor: 'rgba(99, 132, 0, 1)',
          
        };
        var dataMacros = {
          labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
          color: [
            'rgba(229, 31, 31)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          datasets: [MAcrosDiarios, macrosConteo]
        };
        var chartOptions = {
          events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
          animation: { duration: 1, onComplete: function () { 
            var chartInstance = this.chart, ctx = chartInstance.ctx;
             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                 this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                   meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
        };
        var popCanvas = $("#graficaMacrosComida");
var popCanvas = document.getElementById("graficaMacrosComida");
var popCanvas = document.getElementById("graficaMacrosComida").getContext("2d");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: dataMacros,
  options: chartOptions,
  
});
         
      }
});



var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
  var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
  grasasDiarias +  "&comida=" + "cena" + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
      data: graficaMacrosComida,
      dataType:"JSON",
      crossDomain: true,
      cache: false,
      success: function(data)
      {
        graficarCarbosComida=data.carbo;
        graficaProteComida=data.prote;
        graficaGrasasComida=data.grasas;
        var MAcrosDiarios = {
          label: 'Macros Totales',
          data: [carbosDiarios, proteDiarias, grasasDiarias],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
         
        };
        var macrosConteo = {
          label: 'Macros consumidos',
          data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
          backgroundColor: 'rgba(99, 132, 0, 0.6)',
          borderColor: 'rgba(99, 132, 0, 1)',
          
        };
        var dataMacros = {
          labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
          color: [
            'rgba(229, 31, 31)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          datasets: [MAcrosDiarios, macrosConteo]
        };
        var chartOptions = {
          events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
          animation: { duration: 1, onComplete: function () { 
            var chartInstance = this.chart, ctx = chartInstance.ctx;
             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                 this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                   meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
        };
        var popCanvas = $("#graficaMacrosCena");
var popCanvas = document.getElementById("graficaMacrosCena");
var popCanvas = document.getElementById("graficaMacrosCena").getContext("2d");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: dataMacros,
  options: chartOptions,
  
});
         
      }
});


var usuario=localStorage.getItem("nombre");
var graficarCarbosComida;
var graficaProteComida;
var graficaGrasasComida;
  var graficaMacrosComida = "usuario=" + usuario + "&carbos=" + carbosDiarios+"&prote=" + proteDiarias+"&grasas=" + 
  grasasDiarias +  "&comida=" + "snacks" + "&fecha="+fecha;
  $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/macrosComidasGrafica.php",
      data: graficaMacrosComida,
      dataType:"JSON",
      crossDomain: true,
      cache: false,
      success: function(data)
      {
        graficarCarbosComida=data.carbo;
        graficaProteComida=data.prote;
        graficaGrasasComida=data.grasas;
        var MAcrosDiarios = {
          label: 'Macros Totales',
          data: [carbosDiarios, proteDiarias, grasasDiarias],
          backgroundColor: 'rgba(0, 99, 132, 0.6)',
          borderColor: 'rgba(0, 99, 132, 1)',
         
        };
        var macrosConteo = {
          label: 'Macros consumidos',
          data: [graficarCarbosComida, graficaProteComida, graficaGrasasComida],
          backgroundColor: 'rgba(99, 132, 0, 0.6)',
          borderColor: 'rgba(99, 132, 0, 1)',
          
        };
        var dataMacros = {
          labels: ["Carbohidratos" ,  "Proteinas", "Grasas"],
          color: [
            'rgba(229, 31, 31)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)'
          ],
          datasets: [MAcrosDiarios, macrosConteo]
        };
        var chartOptions = {
          events: false, tooltips: { enabled: false }, hover: { animationDuration: 0 },
          animation: { duration: 1, onComplete: function () { 
            var chartInstance = this.chart, ctx = chartInstance.ctx;
             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle,
                Chart.defaults.global.defaultFontFamily); ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
                 this.data.datasets.forEach(function (dataset, i) { var meta = chartInstance.controller.getDatasetMeta(i); 
                   meta.data.forEach(function (bar, index) { var data = dataset.data[index];
                      ctx.fillText(data, bar._model.x, bar._model.y - 5); }); }); } }
        };
        var popCanvas = $("#graficaMacrosSnacks");
var popCanvas = document.getElementById("graficaMacrosSnacks");
var popCanvas = document.getElementById("graficaMacrosSnacks").getContext("2d");
var barChart = new Chart(popCanvas, {
  type: 'bar',
  data: dataMacros,
  options: chartOptions,
  
});
         
      }
});


  }

   



    


  