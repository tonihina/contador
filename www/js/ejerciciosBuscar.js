$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            data: "estado=4",
            beforeSend: function() {
                $("#muestaEjerciciosMP").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestaEjerciciosMP').html(response).fadeIn();
                $("#muestaEjerciciosMP").listview("refresh");
              
            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            data: "estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosP").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosP').html(response).fadeIn();
                $("#muestraEjerciciosP").listview("refresh");

            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            data: "estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosInter").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosInter').html(response).fadeIn();
                $("#muestraEjerciciosInter").listview("refresh");
            }
    });

});


$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            data: "estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosAvan").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosAvan').html(response).fadeIn();
                $("#muestraEjerciciosAvan").listview("refresh");
               
            }
    });

});




 