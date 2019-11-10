const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')

const server = express()

// Middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
}))
server.set('view engine', 'hbs')

server.use(express.urlencoded({extended: true}))
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

// Serve static files
server.use(express.static('public'))

// Routes

server.use('/', routes)


module.exports = server