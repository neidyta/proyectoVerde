const usuarioModel = require("../models/usuarioModel");

const registrarUsuario = (req, res) => {

    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
        return res.status(400).json({
            mensaje: "Todos los campos son obligatorios"
        });
    }

    usuarioModel.crearUsuario({
        id: Date.now(),
        nombre,
        correo,
        password
    });

    res.status(201).json({
        mensaje: "Usuario registrado correctamente"
    });
};

const iniciarSesion = (req, res) => {

    const { correo, password } = req.body;

    const usuario = usuarioModel.buscarPorCorreo(correo);

    if (!usuario) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    if (usuario.password !== password) {
        return res.status(401).json({
            mensaje: "Contraseña incorrecta"
        });
    }

    res.status(200).json({
        mensaje: `Bienvenido ${usuario.nombre}`
    });
};

module.exports = {
    registrarUsuario,
    iniciarSesion
};