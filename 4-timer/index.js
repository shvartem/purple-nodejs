const {timer} = require('./timer');

function main() {
    timer({
        first: process.argv[2],
        second: process.argv[3],
        third: process.argv[4],
        fourth: process.argv[5],
    });
}

main();
