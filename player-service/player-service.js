/**
* @name Player
* @summary Player Hydra service entry point
* @description 
*/
'use strict';

const version = require('./package.json').version;
const hydra = require('hydra');
let config = require('fwsp-config');

const HydraLogger = require('fwsp-logger').HydraLogger;
hydra.use(new HydraLogger());

const player = require('./player');

/**
* Load configuration file
*/
config.init('./config/config.json')
  .then(() => {
    config.version = version;
    config.hydra.serviceVersion = version;
    /**
    * Initialize hydra
    */
    return hydra.init(config);
  })
  .then(() => hydra.registerService())
  .then(serviceInfo => {
    let logEntry = `Starting ${config.hydra.serviceName} (v.${config.version})`;
    hydra.sendToHealthLog('info', logEntry);
    console.log(serviceInfo);

    player.init(hydra);
    hydra.on('message', (message) => {
      player.messageHandler(message);
    });
  })
  .catch(err => {
    console.log('Error initializing hydra', err);
  });
