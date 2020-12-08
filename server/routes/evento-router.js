const express = require('express')

const EventoCtrl = require('../controllers/evento-ctrl')

const router = express.Router()

router.post('/evento', EventoCtrl.createEvento)
router.put('/evento/:id', EventoCtrl.updateEvento)
router.delete('/evento/:id', EventoCtrl.deleteEvento)
router.get('/evento/:id', EventoCtrl.getEventoId)
router.get('/evento', EventoCtrl.getEventos)

module.exports = router