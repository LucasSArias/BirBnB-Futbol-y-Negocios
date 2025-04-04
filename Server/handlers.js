function serverOk(req, res) {
        res.send('Servidor en funcionamiento');
}

// Agregar a esta lista todas los handlers para que puedan ser exportados
module.exports = {
    serverOk
}