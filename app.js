
// Cree un programa utilizando modulos y las funciones de lectura de archivos que
// realice las siguientes busquedas búsqueda de palabras en archivo:
// a. Crear un archivo de texto llamado "palabras.txt" y escriban una lista de
// palabras separadas por espacios.
// b. Luego lea el contenido de "palabras.txt" y solicite al usuario ingresar una
// palabra para buscar en el archivo.
// c. El programa debe contar y mostrar cuántas veces aparece la palabra
// buscada en el archivo.



const fs = require('fs');

function buscarPalabraEnArchivo(palabraBuscada) {
  const filePath = './files/palabras.txt';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Se presento un error al buscar:', err);
      return;
    }

    const palabras = data.split(' ');
    let conteo = 0;

    palabras.forEach((palabra) => {
      if (palabra.trim().toLowerCase() === palabraBuscada.trim().toLowerCase()) {
        conteo++;
      }
    });

    console.log(`Esta palabra  "${palabraBuscada}" se encuentra  ${conteo} veces en el archivo.`);
  });
}

module.exports = {
  buscarPalabraEnArchivo
};
