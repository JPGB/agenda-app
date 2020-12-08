const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Evento = new Schema({
    nome: { type: String, required: true },
    data: { type: String, required: true },
    hora: { type: String, required: true }
}, { timestamps: true }, )

module.exports = mongoose.model('evento', Evento)