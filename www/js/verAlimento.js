$(document).ready(function() {

    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/mostrarAlimentos.php",
            cache: false,
            beforeSend: function() {
                $("#muestraAlimento").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraAlimento').html(response).fadeIn();
                $("#muestraAlimento").listview("refresh");

                
               
            }
    });

});

function detalleAlim(id){

    $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleAlimento.php",
      cache: false,
      data: "id="+id,
      beforeSend: function() {
          $("#alimentoDetalle").text("Cargando...");
         
        },
      success: function(response)
      {
          $('#alimentoDetalle').html(response).fadeIn();
          $("#alimentoDetalle").listview("refresh");
        
      }
  });
  }

  function agregarAlimento(id){
    localStorage.removeItem("alimentoActual");
    localStorage.setItem("alimentoActual", id);
    $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/detalleAlimento.php",
      cache: false,
      data: "id="+id,
      beforeSend: function() {
          $("#detallePorcion").text("Cargando...");
         
        },
      success: function(response)
      {
          $('#detallePorcion').html(response).fadeIn();
          $("#detallePorcion").listview("refresh");
        
      }
  });
 
  }

  function tipoComida(tipo){
    localStorage.removeItem("comida");
    localStorage.setItem("comida", tipo);
  }

  $(document).on("pagecreate", "#ejercicios", function () {
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


  $("#miPlanAlimenticio").on("pageshow", function(){ 
    $.ajax({
      type: "POST",
      url: "https://mirutina21.000webhostapp.com/agregarAlimento.php",
      cache: false,
      beforeSend: function() {
          $("#AlimentosAgregar").text("Cargando...");
        },
      success: function(response)
      {
          $('#AlimentosAgregar').html(response).fadeIn();
          $("#AlimentosAgregar").listview("refresh");    
      }
    });
   var peso= localStorage.getItem("peso");
   var edad= localStorage.getItem("edad");
   var altura=localStorage.getItem("altura");
   var sexo = localStorage.getItem("sexo");
    var flexiones= localStorage.getItem("flexiones");
    var aguaRequerida= 35*peso;
    

   if(sexo=="Hombre"){
        var RequerimientoDiario=  (10*peso) + (6.25 * altura) - ( 5 * edad ) + 5;
        if(flexiones<1){
            RequerimientoDiario=RequerimientoDiario*1.4;
           
        }
        else if(flexiones < 10){
            RequerimientoDiario=RequerimientoDiario*1.5;
           
        }
        else if(flexiones<20){
            RequerimientoDiario=RequerimientoDiario*1.6;
      
        }
        else{
            RequerimientoDiario=RequerimientoDiario*1.6;
          
        }
   }else{
        var RequerimientoDiario= (10*peso) + (6.25 * altura) - ( 5 * edad ) -161;
        if(flexiones<1){
            RequerimientoDiario=RequerimientoDiario*1.4;
           
            
        }
        else if(flexiones < 5){
            RequerimientoDiario=RequerimientoDiario*1.5;
            
        }
        else if(flexiones<10){
            RequerimientoDiario=RequerimientoDiario*1.6;

        }
        else{
          RequerimientoDiario=RequerimientoDiario*1.6;
            
        }
   }
   if(localStorage.getItem("objetivo")=="BajarPeso"){
        var carbohidratos= RequerimientoDiario/100*40;
        var proteinas= RequerimientoDiario/100*35;
        var grasas= RequerimientoDiario/100*25;
        RequerimientoDiario-=RequerimientoDiario/100*20;
   }else if(localStorage.getItem("objetivo")=="Hipertrofia"){
        var carbohidratos= RequerimientoDiario/100*50;
        var proteinas= RequerimientoDiario/100*25;
        var grasas= RequerimientoDiario/100*25;
        RequerimientoDiario+=RequerimientoDiario/100*20;
   }else{
        var carbohidratos= RequerimientoDiario/100*45;
        var proteinas= RequerimientoDiario/100*35;
        var grasas= RequerimientoDiario/100*20;
   }
   var gramosCarbo=(carbohidratos/4).toFixed(2);
   var gramosProte=(proteinas/4).toFixed(2);
   var gramosGrasa=(grasas/9).toFixed(2);

   RequerimientoDiario=RequerimientoDiario.toFixed(2);
   carbohidratos=carbohidratos.toFixed(2);
   proteinas=proteinas.toFixed(2);
   grasas=grasas.toFixed(2);

   localStorage.removeItem("requerimiento");
   localStorage.setItem("requerimiento",RequerimientoDiario);
   localStorage.removeItem("carbos");
   localStorage.setItem("carbos",gramosCarbo);
   localStorage.removeItem("prote");
   localStorage.setItem("prote",gramosProte);
   localStorage.removeItem("grasas");
   localStorage.setItem("grasas",gramosGrasa);

   $('#requerimientoCalorico').html(RequerimientoDiario +" Calorias <br>");
   $('#requerimientoAgua').html(aguaRequerida +" Ml <br>");
   $('#mostrarMacros').html("<tr style='font-size: 16px'><th class='carbo'>Carbohidratos</th><th class='prote'>Proteinas</th><th class='grasa'>Grasas</th></tr>"+
                                "<tr><td class='carbo'>"+ carbohidratos +"Kcal</td><td class='prote'>"+ proteinas +"Kcal</td><td class='grasa'>"+ grasas +"Kcal</td></tr>"+
                                "<td class='carbo'>"+ gramosCarbo +" g</td><td class='prote'>"+ gramosProte +" g</td><td class='grasa'>"+ gramosGrasa +" g</td>");

                var popCanvas = $("#popChart");
                var popCanvas = document.getElementById("popChart");
                var popCanvas = document.getElementById("popChart").getContext("2d");
                var barChart = new Chart(popCanvas, {
          type: 'doughnut',
          data: {
            labels: ["Carbohidratos" , 
                     "Proteinas", 
                     "Grasas"],
            datasets: [{
              label: '50',
              data: [carbohidratos, proteinas, grasas],
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

    /** Una vez obtenido el ID de noticia hacemos lo necesario para cargar los datos de la noticia **/
  
  });




