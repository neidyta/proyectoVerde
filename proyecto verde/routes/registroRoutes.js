const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');

// registro
router.post('/', registroController.crearRegistro);

router.get('/', registroController.obtenerRegistros);

module.exports = router;