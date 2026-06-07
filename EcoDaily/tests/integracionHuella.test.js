const habitoController =
    require("../src/controllers/habitoController");

describe("Integración Huella Ambiental", () => {

    test("Debe generar un resultado válido", () => {

        const reqRegistro = {

            body: {

                transporte: "Bicicleta",
                agua: 50,
                energia: 5,
                residuos: 1

            }

        };

        const resRegistro = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };

        habitoController.registrarHabito(
            reqRegistro,
            resRegistro
        );

        const reqResultado = {};

        const resResultado = {

            json: jest.fn(),
            status: jest.fn().mockReturnThis()

        };

        habitoController.calcularHuella(
            reqResultado,
            resResultado
        );

        const resultado =
            resResultado.json.mock.calls[0][0];

        expect(resultado.nivel)
            .toBeDefined();

        expect(resultado.puntaje)
            .toBeGreaterThan(0);

    });

});