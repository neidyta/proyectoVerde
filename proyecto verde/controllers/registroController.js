const Registro = require('../models/registroModel');

exports.crearRegistro = (req, res) => {
    try {
        const { tipo, valor, fecha } = req.body;

        if (!tipo || !valor || !fecha) {
            return res.status(400).json({
                error: 'Todos los campos son obligatorios'
            });
        }

        const nuevoRegistro = Registro.crear({ tipo, valor, fecha });

        res.status(201).json({
            mensaje: 'Registro creado correctamente',
            data: nuevoRegistro
        });

    } catch (error) {
        res.status(500).json({
            error: 'Error del servidor'
        });
    }
};

exports.obtenerRegistros = (req, res) => {
    const registros = Registro.obtenerTodos();
    res.json(registros);
};