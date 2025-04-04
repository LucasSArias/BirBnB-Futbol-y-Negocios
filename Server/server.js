require('./handlers')

const express = require('express');
const app = express();
const port = 9000 // * Puerto arbitrario para el servidor

app.get('/health', (req, res) => serverOk(req, res)); // Endpoint de estado del servidor

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
    console.log('Endpoint de salud: http://localhost:' + port + '/health');
})