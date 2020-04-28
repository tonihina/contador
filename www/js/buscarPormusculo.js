

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=1&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosHombrosmp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHombrosmp').html(response).fadeIn();
                $("#muestraEjerciciosHombrosmp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=1&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosHombrosp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHombrosp').html(response).fadeIn();
                $("#muestraEjerciciosHombrosp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=1&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosHombrosi").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHombrosi').html(response).fadeIn();
                $("#muestraEjerciciosHombrosi").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=1&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosHombrosa").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHombrosa').html(response).fadeIn();
                $("#muestraEjerciciosHombrosa").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=2&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosHiperdermp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperdermp').html(response).fadeIn();
                $("#muestraEjerciciosHiperdermp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=2&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosHiperderp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperderp').html(response).fadeIn();
                $("#muestraEjerciciosHiperderp").listview("refresh");
               
            }
    });

});


$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=2&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosHiperderi").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperderi').html(response).fadeIn();
                $("#muestraEjerciciosHiperderi").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=2&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosHiperdera").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperdera').html(response).fadeIn();
                $("#muestraEjerciciosHiperdera").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=3&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosResismp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosResismp').html(response).fadeIn();
                $("#muestraEjerciciosResismp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=3&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosResisp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosResisp').html(response).fadeIn();
                $("#muestraEjerciciosResisp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=3&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosResii").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosResii').html(response).fadeIn();
                $("#muestraEjerciciosResii").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=3&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosResia").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosResia').html(response).fadeIn();
                $("#muestraEjerciciosResia").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=5&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosFleximp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosFleximp').html(response).fadeIn();
                $("#muestraEjerciciosFleximp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=5&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosFlexip").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosFlexip').html(response).fadeIn();
                $("#muestraEjerciciosFlexip").listview("refresh");
               
            }
    });

});
$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=5&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosFlexii").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosFlexii').html(response).fadeIn();
                $("#muestraEjerciciosFlexii").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=5&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosFlexia").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosFlexia').html(response).fadeIn();
                $("#muestraEjerciciosFlexia").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=7&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosHipermp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHipermp').html(response).fadeIn();
                $("#muestraEjerciciosHipermp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=7&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosHiperp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperp').html(response).fadeIn();
                $("#muestraEjerciciosHiperp").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=7&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosHiperi").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHiperi').html(response).fadeIn();
                $("#muestraEjerciciosHiperi").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=7&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosHipera").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosHipera').html(response).fadeIn();
                $("#muestraEjerciciosHipera").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=6&estado=4",
            beforeSend: function() {
                $("#muestraEjerciciosExplomp").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosExplomp').html(response).fadeIn();
                $("#muestraEjerciciosExplomp").listview("refresh");
               
            }
    });

});


$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=6&estado=1",
            beforeSend: function() {
                $("#muestraEjerciciosExplop").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosExplop').html(response).fadeIn();
                $("#muestraEjerciciosExplop").listview("refresh");
               
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=6&estado=2",
            beforeSend: function() {
                $("#muestraEjerciciosExploi").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosExploi').html(response).fadeIn();
                $("#muestraEjerciciosExploi").listview("refresh");
               
            }
    });

});


$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://mirutina21.000webhostapp.com/buscarEjercicioMusculo.php",
            cache: false,
            data: "musculo=6&estado=3",
            beforeSend: function() {
                $("#muestraEjerciciosExploa").text("Cargando...");
              },
            success: function(response)
            {
                $('#muestraEjerciciosExploa').html(response).fadeIn();
                $("#muestraEjerciciosExploa").listview("refresh");
               
            }
    });

});