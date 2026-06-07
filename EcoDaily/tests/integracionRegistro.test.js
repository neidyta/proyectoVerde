const authController =
    require("../src/controllers/authController");

const usuarioModel =
    require("../src/models/usuarioModel");

describe("Integración Registro Usuario", () => {

    test("Debe registrar un usuario", () => {

        const req = {

            body: {

                nombre: "Natalia",
                correo: "natalia@test.com",
                password: "123456"

            }

        };

        const res = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };

        authController.registrarUsuario(
            req,
            res
        );

        const usuarios =
            usuarioModel.obtenerUsuarios();

        expect(usuarios.length)
            .toBeGreaterThan(0);

        expect(res.status)
            .toHaveBeenCalledWith(201);

    });

});