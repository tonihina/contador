function verEjercicio(id){

  $.ajax({
    type: "POST",
    url: "https://mirutina21.000webhostapp.com/detalleEjercicio.php",
    cache: false,
    data: "id="+id,
    beforeSend: function() {
        $("#ejercicioDetalle").text("Cargando...");
        $("#ejercicioDetalleP").text("Cargando...");
        $("#ejercicioDetalleI").text("Cargando...");
        $("#ejercicioDetalleA").text("Cargando...");
      },
    success: function(response)
    {
        $('#ejercicioDetalle').html(response).fadeIn();
        $('#ejercicioDetalleP').html(response).fadeIn();
        $('#ejercicioDetalleI').html(response).fadeIn();
        $('#ejercicioDetalleA').html(response).fadeIn();
    }
});
}