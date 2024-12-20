const {parentPort, workerData} = require('worker_threads');
const {divideThree} = require('./divideThree');

parentPort.postMessage(divideThree(workerData));
