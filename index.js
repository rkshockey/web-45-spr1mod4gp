require('dotenv').config() // allows to stash artificial env variables
const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.use(express.static(path.join(__dirname, `client/build`)))

server.get('/api', (req, res) => {
    res.json({message: 'Web45 rocks!'})
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})