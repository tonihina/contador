


$ruta_carpeta="";
$ruta_guardar_archivo=$ruta_carpeta.basename($_FILES["imagen"]["name"]);
$nombre_archivo= basename($_FILES["imagen"]["name"]);
if(move_uploaded_file($nombre_archivo,$ruta_guardar_archivo)){
    return "imagen guardada";
}