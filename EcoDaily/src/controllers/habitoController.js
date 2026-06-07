const habitoModel = require("../models/habitoModel");

const registrarHabito = (req, res) => {

    const {
        transporte,
        agua,
        energia,
        residuos
    } = req.body;

    habitoModel.guardarHabito({
        id: Date.now(),
        transporte,
        agua,
        energia,
        residuos
    });

    res.status(201).json({
        mensaje: "Hábitos registrados correctamente"
    });

};

const calcularHuella = (req, res) => {

    const habito = habitoModel.obtenerUltimoHabito();

    if (!habito) {

        return res.status(404).json({
            mensaje: "No existen registros"
        });

    }

    let puntaje = 0;

    switch(habito.transporte){

        case "Automóvil":
            puntaje += 40;
            break;

        case "Motocicleta":
            puntaje += 30;
            break;

        case "Transporte público":
            puntaje += 20;
            break;

        case "Bicicleta":
            puntaje += 5;
            break;

    }

    const agua = Number(habito.agua);
    const energia = Number(habito.energia);
    const residuos = Number(habito.residuos);

    puntaje += agua > 200 ? 30 : agua > 100 ? 20 : 10;

    puntaje += energia > 20 ? 30 : energia > 10 ? 20 : 10;

    puntaje += residuos > 5 ? 30 : residuos >= 3 ? 20 : 10;

    let nivel = "";

    if(puntaje <= 40){

        nivel = "Baja";

    }else if(puntaje <= 80){

        nivel = "Media";

    }else{

        nivel = "Alta";

    }

    res.json({

        puntaje,
        nivel

    });

};

const obtenerRecomendaciones = (req, res) => {

    const habito = habitoModel.obtenerUltimoHabito();

    if (!habito) {

        return res.status(404).json({
            mensaje: "No existen registros"
        });

    }

    let recomendaciones = [];

    if(habito.transporte === "Automóvil"){

        recomendaciones.push(
            "Utiliza transporte público o bicicleta al menos una vez por semana."
        );

    }

    if(Number(habito.agua) > 100){

        recomendaciones.push(
            "Reduce el tiempo de tus duchas y evita desperdiciar agua."
        );

    }

    if(Number(habito.energia) > 10){

        recomendaciones.push(
            "Apaga los dispositivos electrónicos cuando no los utilices."
        );

    }

    if(Number(habito.residuos) > 3){

        recomendaciones.push(
            "Separa residuos y recicla materiales aprovechables."
        );

    }

    if(recomendaciones.length === 0){

        recomendaciones.push(
            "Excelente trabajo. Mantén tus hábitos sostenibles."
        );

    }
    

    res.json(recomendaciones);

};

const listarHabitos = (req, res) => {

    const habitos =
        habitoModel.obtenerHabitos();

    res.json(habitos);

};

module.exports = {
    registrarHabito,
    calcularHuella,
    obtenerRecomendaciones,
    listarHabitos
};