class Alojamiento {
    constructor(
        anfitrion,
        nombre,
        descripcion,
        precioPorNoche,
        moneda,
        horarioCheckIn,
        horarioCheckOut,
        direccion,
        cantHuespedesMax,
        caracteristicas = [],
        reservas = [],
        fotos = []
    ) {
        this.anfitrion = anfitrion;               // Usuario
        this.nombre = nombre;                     // String
        this.descripcion = descripcion;           // String
        this.precioPorNoche = precioPorNoche;     // Double
        this.moneda = moneda;                     // ENUM:  Moneda
        this.horarioCheckIn = horarioCheckIn;     // String
        this.horarioCheckOut = horarioCheckOut;   // String
        this.direccion = direccion;               // Direccion
        this.cantHuespedesMax = cantHuespedesMax; // number
        this.caracteristicas = caracteristicas;   // Caracteristica[]
        this.reservas = reservas;                 // Reserva[]
        this.fotos = fotos;                       // Foto[]
    }

    estasDisponibleEn(rangoDeFechas) {
        // TODO Implementar lógica
        // Los datos de tipo Date se pueden comparar directamente con operadores <, >, =....
        // ? Propongo algo tipo esto y comparar los dias de la reserva con ese rango (si uno es true, q de false (no se la sintaxis xd))
        /*
        return !this.reservas.any(
            unaReserva => unaReserva.coincidenLosDias(rangoDeFechas)
        )
        */


    }

    tuPrecioEstaDentroDe(valorMinimo, valorMaximo) {
        // TODO Implementar lógica
    }

    tenesCaracteristica(caracteristica) {
        // TODO Implementar lógica
        // ? return this.caracteristicas.includes(caracteristica)
    }

    puedenAlojarse(cantHuespedes) {
        // TODO Implementar lógica
        // ? return cantHuespedes <= this.cantHuespedesMax
    }
}

class Foto {
    constructor(descripcion, path) {
        this.descripcion = descripcion; // String
        this.path = path;               // String
    }
}

class Direccion {
    constructor(calle, numero, ciudad, lat, long) {
        this.calle = calle;   // String
        this.numero = numero; // String
        this.ciudad = ciudad; // Ciudad
        this.lat = lat;       // Double
        this.long = long;     // String
    }
}

class Ciudad {
    constructor(nombre, pais) {
        this.nombre = nombre; // String
        this.pais = pais;     // Pais
    }
}

class Pais {
    constructor(nombre) {
        this.nombre = nombre; // String
    }
}

class Reserva {
    constructor(fechaAlta, huesped, alojamiento, rangoFechas, estado, precioPorNoche) {
        this.fechaAlta = fechaAlta;           // Date
        this.huesped = huesped;               // Usuario
        this.alojamiento = alojamiento;       // Alojamiento
        this.rangoFechas = rangoFechas;       // RangoFechas
        this.estado = estado;                 // EstadoReserva
        this.precioPorNoche = precioPorNoche; // Double
    }

    actualizarEstado(EstadoReserva) { 
        // Imagino que actualizar estado es el setter del atributo estado
        // ? this.estado = EstadoReserva
    }
}

class RangoFechas {
    constructor(fechaInicio, fechaFin) {
        this.fechaInicio = fechaInicio; // Date
        this.fechaFin = fechaFin;       // Date
    }
}

class CambioEstadoReserva {
    constructor(fecha, estado, reserva, motivo, usuario) {
        this.fecha = fecha; // Date
        this.estado = estado; // EstadoReserva
        this.reserva = reserva; // Reserva
        this.motivo = motivo; // String
        this.usuario = usuario; // Usuario
    }
}

class FactoryNotificacion {
    crearMensajeSegunEstadoReserva(estado) {
        // TODO implementar 
    }

    crearSegunReserva(reserva) {
        // TODO implementar
    }
}

class Notificacion {
    constructor(mensaje, usuario, fechaalta, leida, fechaLeida) {
        this.mensaje = mensaje;       // String
        this.usuario = usuario;       // Usuario
        this.fechaalta = fechaalta;   // Date
        this.leida = leida;           // Boolean
        this.fechaLeida = fechaLeida; // Date
    }

    marcarComoLeida() {
        // Setter de atributo "leida" ?
        // TODO implementar
    }
}

class Usuario {
    constructor(nombre, email, tipo) {
        this.nombre = nombre; // String
        this.email = email;   // String
        this.tipo = tipo;     // ENUM: TipoUsuario
    }
}

// ENUMS. Son similares a los constructores en haskell para crear un "nuevo tipo de dato"
// cada static es un valor que puede tomar el tipo de dato.

class TipoUsuario {
    static HUESPED = "HUESPED";
    static ANFITRION = "ANFITRION";
}

class Moneda {
    static DOLAR_USA = "DOLAR_USA";
    static PESO_ARG = "PESO_ARG";
    static REALES = "REALES";
}

class Caracteristica {
    static WIFI = "WIFI";
    static PISCINA = "PISCINA";
    static MASCOTAS_PERMITIDAS = "MASCOTAS_PERMITIDAS";
    static ESTACIONAMIENTO = "ESTACIONAMIENTO";
}

class EstadoReserva {
    static PENDIENTE = "PENDIENTE";
    static CONFIRMADA = "CONFIRMADA";
    static CANCELADA = "CANCELADA";
}



module.exports = {
    Alojamiento,
    Foto,
    Direccion,
    Ciudad,
    Pais,
    Reserva,
    RangoFechas,
    CambioEstadoReserva,
    FactoryNotificacion,
    Notificacion,
    Usuario,
    TipoUsuario,
    Moneda,
    Caracteristica,
    EstadoReserva
};