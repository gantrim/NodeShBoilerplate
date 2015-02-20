#!/usr/bin/env node

// requires
var winston = require("winston");
var nconf = require("nconf");

// Application Setup
nconf.argv()
    .env()
    .file({file: './config/config.json'});

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: 'logs/app.log'})
    ]
});

//Write your app here
logger.info("Starting AdvNodeShApp".green);





