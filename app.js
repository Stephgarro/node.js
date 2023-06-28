// Ejercicio Programado
// 1-Crear un programa en Node JS que copie el contenido de un archivo de origen a un archivo de destino, 
// esto se debe realizar mediante una función llamada copyFile que acepte los nombres de archivo de origen y destino como parámetros. 
// Esta función leerá el contenido del archivo de origen y lo escribirá en el archivo de destino.
// Mostrar un msj en consola confirmando que el archivo fue copiado exitosamente o un mensaje de error en caso que algo no funcionara bien

const fs = require('fs');

function copyFile(origen, destino) {
  fs.copyFile(origen, destino, (err) => {
    if (err) {
      console.error('Error al copiar el archivo:', err);
      return;
    }

    console.log('El archivo fue copiado exitosamente.');
  });
}

copyFile('files/origen.txt', 'files/destino.txt');
