const habitoController = require("../src/controllers/habitoController");
const habitoModel = require("../src/models/habitoModel");

describe("Cálculo de Huella Ambiental", () => {

    test("Debe calcular una huella baja", () => {

        habitoModel.guardarHabito({

            transporte: "Bicicleta",
            agua: 50,
            energia: 5,
            residuos: 1

        });

        const req = {};

        const res = {

            json: jest.fn(),

            status: jest.fn().mockReturnThis()

        };

        habitoController.calcularHuella(
            req,
            res
        );

        expect(res.json).toHaveBeenCalled();

        const resultado =
            res.json.mock.calls[0][0];

        expect(resultado.nivel)
            .toBe("Baja");

    });

});