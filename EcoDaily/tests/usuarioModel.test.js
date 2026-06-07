const usuarioModel = require("../src/models/usuarioModel");

describe("Modelo de Usuario", () => {

    test("Debe crear un usuario", () => {

        const cantidadInicial =
            usuarioModel.obtenerUsuarios().length;

        usuarioModel.crearUsuario({
            id: 1,
            nombre: "Sandra",
            correo: "sandra@test.com",
            password: "123456"
        });

        const cantidadFinal =
            usuarioModel.obtenerUsuarios().length;

        expect(cantidadFinal)
            .toBe(cantidadInicial + 1);

    });

});