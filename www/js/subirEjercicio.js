 $(document).ready(function() {
                    $.ajax({
                            type: "POST",
                            url: "https://mirutina21.000webhostapp.com/selectEjercicio.php",
                            success: function(response)
                            { 
                                $('.selector-estado select').html(response).fadeIn();
                            }
                    });

                    $.ajax({
                        type: "POST",
                        url: "https://mirutina21.000webhostapp.com/selectMusculo.php",
                        success: function(response)
                        {
                            $('.selector-musculo select').html(response).fadeIn();
                        }
                });

                $.ajax({
                    type: "POST",
                    url: "https://mirutina21.000webhostapp.com/selectFuncion.php",
                    success: function(response)
                    {
                        $('.selector-funcion select').html(response).fadeIn();
                    }
            });
            
 
                });
                
$(document).ready(function(){
    var frm=$("#envio");
    frm.bind("submit",function(){
      var frmData=new FormData;
      formData.append('nombre', $("input[name=nombre]"));
      formData.append('estado', $("input[name=estado]"));
      formData.append('musculo', $("input[name=musculo]"));
      formData.append('funcion', $("input[name=funcion]"));
      frmData.append("imagen",$("input[name=imagen]")[0].files[0]);
     
      $.ajax({
        url: frm.attr("action"),
        type: frm.attr("method"),
        data: frmData,
        processData: false,
        contentType: false,
        cache: false,
        success: function(data){
          if (data == "success") {
            window.location.replace("subirImagen.html");
          } else if (data == "error") {
              alert("error");
          }
        }
      });

      return false;
    });
})

                $(function(){
                    $("#guardardatos").click(function(){
                      var fNombre = $("#nombre").val();
                      var fEstado= $("#estado").val();
                      var fmusculo= $("#musculo").val();
                      var ffuncion= $("#funcion").val();
                      alert(fNombre+fEstado+fmusculo+ffuncion)
                      
                      var dataString = "nombre=" + fNombre + "&estado=" + fEstado + "&musculo=" + fmusculo+ "&funcion="
                       + ffuncion + "&insert=";
                      $.ajax({
                        type:"POST",
                        url: "#",
                        data: dataString,
                        crossDomain: true,
                        cache: false,
                        beforeSend: function() {
                          document.getElementById("guardardatos").innerHTML = "Conectando...";
                        },
                        success: function(data) {
                          if (data == "success") {
                            window.location.replace("pruebas.html");
                          } else if (data == "error") {
                              alert("error");
                          }
                      }
                      });
                      
                    });
                    
                  });
                  
                