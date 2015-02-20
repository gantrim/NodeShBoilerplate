'use strict'
var winston = require("winston");
var nconf = require("nconf");
nconf.use('file', {file: './config/config.json'});

//region logger setup
var serviceLogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({json: true, prettyPrint: true}),
        new (winston.transports.File)({filename: 'logs/services.log'})
    ]
});
//endregion
var Service = {
    doStuff: function (jobName, deployFolder) {
        //Do stuff
    }
}

module.exports = Service;