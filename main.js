

const readline = require('readline');
const app = require('./app');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function preguntarPalabra() {
  rl.question('Aqui puedes ingresar tu palabra para buscarla en la lista: ', (palabra) => {
    app.buscarPalabraEnArchivo(palabra);
    preguntarPalabra();
  });
}

preguntarPalabra();
