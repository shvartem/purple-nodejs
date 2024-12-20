const {performance, PerformanceObserver} = require('perf_hooks');
const {divideThree} = require('./divideThree');
const {Worker} = require('worker_threads');
const path = require('path');

const observer = new PerformanceObserver((items) => {
    items.getEntries().forEach(({duration, name}) => {
        console.log(`${name}: ${duration}`);
    });
});

observer.observe({
    type: 'measure',
});

function directRun(array) {
    performance.mark('start directRun');
    const count = divideThree({array});

    performance.mark('end directRun');
    performance.measure('measure directRun', 'start directRun', 'end directRun');

    return count;
}

function workerRun(array) {
    return new Promise((resolve, reject) => {
        performance.mark('start workerRun');

        const worker = new Worker(path.join(__dirname, 'worker.js'), {
            workerData: {
                array,
            },
        });

        worker.on('message', (message) => {
            performance.mark('end workerRun');
            performance.measure('measure workerRun', 'start workerRun', 'end workerRun');

            resolve(message);
        });

        worker.on('error', reject);

        worker.on('exit', (exitCode) => {
            console.error(`Worker exited with code: ${exitCode}`);
        });
    });
}

async function main() {
    const arr = Array.from({length: 300_000}, (_, ind) => ind + 1);

    const directResult = directRun(arr);

    console.log({directResult});

    try {
        const workerResult = await workerRun(arr);

        console.log({workerResult});
    } catch (error) {
        console.error(`Worker crashed with error: ${error.message}`);
    }
}

main();
