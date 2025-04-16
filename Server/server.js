import {z} from "zod"
import { domain } from "./domain.js"

const idTransform = z.string().transform(((val, ctx) => {
    const num = Number(val);
    if (isNaN(num)) {
      ctx.addIssue({
        code: "INVAILD_ID",
        message: 'id must be a number',
      });
      return z.NEVER;
    }
    return num;
}))

const esquemaReserva = z.object({
    fechaAlta: z.string(),
    huespedReservador: z.string(),
    alojamiento: z.string(),
    rangoFechas:z.string(),
    estado: z.string(),
    precioPorNoche: z.string()
})


const express = require('express');
const app = express();
const port = 9000 // * Puerto arbitrario para el servidor


const SaludController = require('./controllers/health.controller')

const router = express.Router();

const saludController = new SaludController()

app.use("/", router) // * Se le dice al servidor que use el router para manejar las rutas

router.get('/health', (req, res) => saludController.health(req, res)) // * Se le dice al router que use el controlador de salud para manejar la ruta /health

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
    console.log('Endpoint de salud: http://localhost:' + port + '/health');
})

/*
# Creación de una reserva, asegurando la disponibilidad del alojamiento en las fechas seleccionadas.
# Cancelación de una reserva antes de su fecha de inicio.
# Consulta del historial de reservas de un usuario.
# Modificación de una reserva dentro de las reglas establecidas por el Sistema (por ejemplo, cambios de fechas si el alojamiento sigue disponible).
*/

router.get('/crearReserva', (req,res) => crearReservaController.crear(req, res))

router.put(PATH_RESERVAS, (req, res) => {
    const body = req.body
    const resultBody = esquemaReserva.safeParse(body)

    if (resultBody.error) {
        res.status(400).json(resultBody.error.issues)
        return
    }

    

})