const usuarios = [];

const crearUsuario = (usuario) => {
    usuarios.push(usuario);
};

const obtenerUsuarios = () => {
    return usuarios;
};

const buscarPorCorreo = (correo) => {
    return usuarios.find(
        usuario => usuario.correo === correo
    );
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    buscarPorCorreo
};