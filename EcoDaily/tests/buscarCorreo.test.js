const usuarioModel = require("../src/models/usuarioModel");

describe("Búsqueda de usuarios", () => {

    test("Debe encontrar un usuario por correo", () => {

        const correo = "prueba@test.com";

        usuarioModel.crearUsuario({
            id: 999,
            nombre: "Usuario Prueba",
            correo: correo,
            password: "123456"
        });

        const usuarioEncontrado =
            usuarioModel.buscarPorCorreo(correo);

        expect(usuarioEncontrado).toBeDefined();

        expect(usuarioEncontrado.correo)
            .toBe(correo);

    });

});