const Evento = require('../models/evento-model')

createEvento = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Favot enviar um evento',
        })
    }

    const evento = new Evento(body)

    if (!evento) {
        return res.status(400).json({ success: false, error: err })
    }

    evento
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: evento._id,
                message: 'Evento Criado!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'O evento não foi criado!',
            })
        })
}

updateEvento = async(req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Você deve enviar as informações a serem atualizadas',
        })
    }

    Evento.findOne({ _id: req.params.id }, (err, evento) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Evento Não encontrado!',
            })
        }

        evento.nome = body.nome
        evento.horario = body.horario

        evento
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: evento._id,
                    message: 'Evento atualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'O evento não foi atualizado!',
                })
            })
    })
}

deleteEvento = async(req, res) => {
    await Evento.findOneAndDelete({ _id: req.params.id }, (err, evento) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!evento) {
            return res
                .status(404)
                .json({ success: false, error: `Evento não encontrado` })
        }

        return res.status(200).json({ success: true, data: evento })
    }).catch(err => console.log(err))
}

getEventoId = async(req, res) => {
    await Evento.findOne({ _id: req.params.id }, (err, evento) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!evento) {
            return res
                .status(404)
                .json({ success: false, error: `Evento não encontrado` })
        }
        return res.status(200).json({ success: true, data: evento })
    }).catch(err => console.log(err))
}

getEventos = async(req, res) => {
    await Evento.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Evento não encontrado` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}

module.exports = {
    createEvento,
    updateEvento,
    deleteEvento,
    getEventos,
    getEventoId,
}