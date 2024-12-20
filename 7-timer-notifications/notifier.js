const notifier = require('node-notifier');

function notifierFn(message) {
    notifier.notify({
        title: 'Уведомление таймера',
        message,
        sound: true,
        wait: true,
    });
}

module.exports = {
    notifierFn,
};
