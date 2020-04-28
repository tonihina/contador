$(function(){
  $("#guardardatos").click(function(){
    var nombre=$('[name="nombre"]').val();
    var peso=$('[name="peso"]').val();
    var edad=$('[name="edad"]').val();
    var altura=$('[name="altura"]').val();
    var experiencia=$('[name="experiencia"]').val();
    var sexo=$('[name="sexo"]').val();
    var contrasenia=$('[name="contrasenia"]').val();

    
    
    var fNombre = $("#nombre").val();
    var fPeso= $("#peso").val();
    var fEdad= $("#edad").val();
    var fAltura= $("#altura").val();
    var fSexo= $("#sexo").val();
    var fhaces= $("#experiencia").val();
    var fcontrasenia= $("#contrasenia").val();
    
    var dataString = "nombre=" + fNombre + "&edad=" + fEdad + "&altura=" + fAltura+ "&sexo=" + fSexo 
    + "&experiencia=" + fhaces+ "&peso=" + fPeso + "&contrasenia=" + fcontrasenia + "&insert=";
    $.ajax({
      type:"POST",
      url: "https://mirutina21.000webhostapp.com/insertar.php",
      data: dataString,
      crossDomain: true,
      cache: false,
      beforeSend: function() {
        document.getElementById("guardardatos").innerHTML = "Conectando...";
      },
      success: function(data) {
        if (data == "success") {
          window.localStorage.setItem("nombre", nombre);
          window.localStorage.setItem("peso",peso);
          window.localStorage.setItem("edad",edad);
          window.localStorage.setItem("altura",altura);
          window.localStorage.setItem("experiencia",experiencia);
          window.localStorage.setItem("sexo",sexo);
          window.localStorage.setItem("contrasenia",contrasenia);
          window.location.replace("pruebas.html");
        } else if (data == "error") {
      
          $.mobile.changePage('#error',{ transition: "slideup", role: 'dialog' });
        }
    }
    });
    
  });
  
});

$(document).bind('deviceready', function(){
  $(function(){
      $('form').submit(function(){
          var postData = $(this).serialize();
          $.ajax({
              type: 'POST',
              data: postData+'&lid='+dataID,
              // cargamos la url del servidor externo
              url: 'https://mirutina21.000webhostapp.com/conexion.php',
              success: function(data){
                  console.log(data);
                
                  alert('Tu comentario fue agregado');
              },
              error: function(data){
                  console.log(data);
                  alert('Ocurrio un error al enviar tu comentario');
              }
          });
          return false;
      });
  });
});

function enviarDatos(){
  var nombre=$('[name="nombre"]').val();
  var peso=$('[name="peso"]').val();
  var edad=$('[name="edad"]').val();
  var altura=$('[name="altura"]').val();
  var experiencia=$('[name="experiencia"]').val();
  var sexo=$('[name="sexo"]').val();

  $.ajax({
    type:'POST',
    url: 'https://mirutina21.000webhostapp.com/conexion.php',
    data: ({ nombre: fnombre, edad: fedad, altura: faltura, sexo: fsexo, 
      experiencia: fexperiencia, peso: fpeso}),
    success: function(data){
      if($.trim(data)=="ok"){
        alert("Agregado");
      }else if($.trim(data)=="error"){
        $.mobile.changePage('#error',{ transition: "slideup", changeHash: false, role: dialog });
      }
      
    },
    error: function(data){
      
      alert('Ocurrio un error al enviar tu comentario');
    }
  });
  alert('Ocurrio un error al enviar tu comentario');
  window.localStorage.setItem("nombre", nombre);
  window.localStorage.setItem("peso",peso);
  window.localStorage.setItem("edad",edad);
  window.localStorage.setItem("altura",altura);
  window.localStorage.setItem("experiencia",experiencia);
  window.localStorage.setItem("sexo",sexo);
}


$(document).ready(function(){
  $("#botonLogin").click(function(){
      var fnombre = $("#nombre").val();
      var fedad = $("#edad").val();
      var faltura = $("#altura").val();
      var fsexo = $("#sexo").val();
      var fexperiencia = $("#experiencia").val();
      var fpeso = $("#peso").val();
      $.post("https://mirutina21.000webhostapp.com/conexion.php",{ nombre: fnombre, edad: fedad, altura: faltura, sexo: fsexo, 
                                  experiencia: fexperiencia, peso: fpeso},function(respuesta){
        if (respuesta == true) {
            $.mobile.changePage("pruebas.html",{ transition: "slideup", changeHash: false });
        }
        else{
            $.mobile.changePage('#error',{ transition: "slideup", changeHash: false, role: dialog });
            /*$("#errorMsg").fadeIn(300);
            $("#errorMsg").css("display", "block");*/
        }
    });
    });
  });

  $(function(){
    $("#entrarCuenta").click(function(){
      var nombre=$('[name="nickname"]').val();
      var contrasenia=$('[name="pass"]').val();
  
      
      
      var fNombre = $("#nickname").val();
      var fcontrasenia= $("#pass").val();
      if(fcontrasenia==""){
    
          $("#overlay").popup("open", { transition: "slideup" });
     
      }else if(fNombre==""){
  
      }else{
        var dataString = "nombre=" + fNombre + "&contrasenia=" + fcontrasenia + "&entrar=";
      $.ajax({
        type:"POST",
        url: "https://mirutina21.000webhostapp.com/login.php",
        data: dataString,
        dataType:"JSON",
        crossDomain: true,
        cache: false,
        beforeSend: function() {
          document.getElementById("entrarCuenta").innerHTML = "Conectando...";
        },
        success: function(data) {
          if(data.error=="error"){
            document.getElementById("entrarCuenta").innerHTML = "Hecho";
            $.mobile.changePage('#error',{ transition: "slideup", role: 'dialog' });
         
          }else{
            window.localStorage.setItem("nombre", data.nombre);
          window.localStorage.setItem("peso",data.peso);
          window.localStorage.setItem("edad",data.edad);
          window.localStorage.setItem("altura",data.altura);
          window.localStorage.setItem("experiencia",data.experiencia);
          window.localStorage.setItem("sexo",data.sexo);
          window.localStorage.setItem("contrasenia",data.contraseña);
          window.localStorage.setItem("flexiones", data.flexiones);
          window.localStorage.setItem("sentadillas", data.sentadillas);
          window.localStorage.setItem("fondos", data.fondos);
          window.localStorage.setItem("abdominales", data.abdominales);
          window.localStorage.setItem("objetivo", data.objetivo);
          window.location.replace("principal.html");
          }
          
         }
        
      });
      }

    });
    
  });

  

