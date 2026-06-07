const express = require("express");

const router = express.Router();

const habitoController = require("../controllers/habitoController");

router.post(
    "/registrar",
    habitoController.registrarHabito
);

router.get(
    "/resultado",
    habitoController.calcularHuella
);

router.get(
    "/recomendaciones",
    habitoController.obtenerRecomendaciones
);

router.get(
    "/mis-registros",
    habitoController.listarHabitos
);

module.exports = router;