const habitoController =
    require("../src/controllers/habitoController");

const habitoModel =
    require("../src/models/habitoModel");

describe("Integración Registro Hábito", () => {

    test("Debe almacenar un hábito", () => {

        const req = {

            body: {

                transporte: "Bicicleta",
                agua: 50,
                energia: 5,
                residuos: 1

            }

        };

        const res = {

            status: jest.fn().mockReturnThis(),
            json: jest.fn()

        };

        habitoController.registrarHabito(
            req,
            res
        );

        const habitos =
            habitoModel.obtenerHabitos();

        expect(habitos.length)
            .toBeGreaterThan(0);

    });

});