// 1-Crea un servidor HTTP utilizando Express en Node.js que responda a diferentes rutas con diferentes mensajes.
// 2-El servidor debe responder a las siguientes rutas:
// --Ruta raíz ("/"):"¡Bienvenido al servidor HTTP usando Express!"
// --Ruta "/task" get: "Esta ruta va a devolver una lista de tareas" para efectos del registro registrar el id nombre de la tarea, una breve descripcion
// --Ruta "/task" post: "agrega una nueva tarea a la lista"
// –Ruta “/image/:username”: si el username ===’ronny’ devuelve una imagen ( la imagen es a gusto del estudiante) 
// --Cualquier otra ruta: "Página no encontrada"
// Escucha en el puerto 3000.
// Cuando un cliente acceda a una ruta no especificada, el servidor debe responder con un código de estado 404 (Not Found).

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

app.get('/task', (req, res) => {
  const tasks = [
    {
      id: 101,
      name: 'Definicion de grupos de trabajo ',
      description: 'Los grupos de trabajo encargados del diseno '
    },
    {
      id: 102,
      name: 'Definicion de horarios ',
      description: 'Se definen los horarios de trabajo '
    },
  
  ];
  res.json(tasks);
});


app.post('/task', (req, res) => {

  const newTask = req.body;

  res.send('se agrego la nueva tarea');
});


app.get('/image/:username', (req, res) => {
  const { username } = req.params;
  if (username === 'birthday.jpg') {
    
    res.sendFile(__dirname + '/birthday.jpg'); 
  } else {
    res.status(404).send('Página no encontrada');
  }
});


app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
