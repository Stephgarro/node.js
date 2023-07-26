const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP! soy steph');
});


app.get('/about', (req, res) => {
  res.send('Esta es la página de acerca de nosotros.');
});


app.get('/contact', (req, res) => {
  res.send('Ponte en contacto con nosotros en contactstephgarro2001@gmail.com');
});


app.use((req, res) => {
  res.status(404).send('La pagina no se encontro ');
});


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${3000}`);
});


