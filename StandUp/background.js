var standupNotification = 'standup-notification';

browser.alarms.create('', { periodInMinutes: 60 });

function getRandom() {
    var quotes = [
        'Show Me your moves',
        'Time to get out of the Matrix',
        'Its almost as easy to stand up as it is to sit down',
        'Time to live a healthy life',
        'Time for the hourly break from code'
    ];

    return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

browser.alarms.onAlarm.addListener(function () {
    browser.notifications.create(standupNotification, {
        type: 'basic',
        iconUrl: browser.extension.getURL('icons/icon.png'),
        title: 'Time to Standup',
        message: getRandom()
    });
});

browser.browserAction.onClicked.addListener(() => {
    var clearing = browser.notifications.clear(standupNotification);
    clearing.then(() => {
        console.log('cleared');
    });
});
