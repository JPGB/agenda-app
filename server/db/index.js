const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://mernmongoadmin:L0stiall@cluster0.6pdow.mongodb.net/agenda?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db