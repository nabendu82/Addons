var waterNotification = 'water-notification';

browser.alarms.create('', { periodInMinutes: 120 });

browser.alarms.onAlarm.addListener(function (alarm) {
    browser.notifications.create(waterNotification, {
        type: 'basic',
        iconUrl: browser.extension.getURL('icons/icon.png'),
        title: 'Drink Some Water',
        message: 'Time to drink some Water!!!'
    });
});

browser.browserAction.onClicked.addListener(() => {
    var clearing = browser.notifications.clear(waterNotification);
    clearing.then(() => {
        console.log('cleared');
    });
});
