const express = require('express');

const gatekeeper = require('../gatekeeper/gatekeeperMiddleware');
const configureMiddleware = require('../config/middleware');
const configureRoutes = require('../config/routes');

const server = express();

// middleware
configureMiddleware(server);

// routes
configureRoutes(server);

// server.use(gateKeeper);

server.get('/', (req, res) => {
    res.status(200).json({api: 'running'})
})

server.get('/secret', gatekeeper, (req, res) => {
    res.send(req.welcomeMessage)
})

module.exports = server;
