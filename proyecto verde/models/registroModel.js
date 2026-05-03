// "base de datos" (simulación)
let registros = [];

class Registro {
    constructor(tipo, valor, fecha) {
        this.id = registros.length + 1;
        this.tipo = tipo;
        this.valor = valor;
        this.fecha = fecha;
    }

    static crear(data) {
        const nuevoRegistro = new Registro(
            data.tipo,
            data.valor,
            data.fecha
        );
        registros.push(nuevoRegistro);
        return nuevoRegistro;
    }

    static obtenerTodos() {
        return registros;
    }
}

module.exports = Registro;