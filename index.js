require('dotenv').config() // allows to stash artificial env variables
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.get('/', (req, res) => {
    res.send('<h1>Web45 Base Server</h1>')
})

server.get('/api', (req, res) => {
    res.json({message: 'Web45 rocks!'})
})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})