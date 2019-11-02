const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

// Middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Serve static files
server.use(express.static('public'))

// Routes

server.use('/', routes)


module.exports = server