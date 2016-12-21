/*globals */
'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function ({ app, encryption, data }) {

    let controllers = {};
    fs.readdirSync(__dirname)
        .filter(file => file.includes('-controller'))
        .forEach(file => {
            let controllerModule = require(path.join(__dirname, file))({ app, encryption, data });

            let moduleName = file.substring(0, file.indexOf('-controller'));
            controllers[moduleName] = controllerModule;
        });

    return controllers;

};