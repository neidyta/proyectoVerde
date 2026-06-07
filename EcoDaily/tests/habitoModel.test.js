const habitoModel = require("../src/models/habitoModel");

describe("Modelo de Hábitos", () => {

    test("Debe guardar un hábito", () => {

        const cantidadInicial =
            habitoModel.obtenerHabitos().length;

        habitoModel.guardarHabito({

            transporte: "Bicicleta",
            agua: 50,
            energia: 5,
            residuos: 1

        });

        const cantidadFinal =
            habitoModel.obtenerHabitos().length;

        expect(cantidadFinal)
            .toBe(cantidadInicial + 1);

    });

});