const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const eventoRouter = require('./routes/evento-router')

const app = express()
const apiPort = 3000

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', eventoRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))