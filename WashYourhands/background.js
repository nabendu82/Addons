var washNotification = 'wash-notification';

browser.alarms.create('', { periodInMinutes: 60 });

browser.alarms.onAlarm.addListener(function (alarm) {
    browser.notifications.create(washNotification, {
        type: 'basic',
        iconUrl: browser.extension.getURL('icons/icon.png'),
        title: 'Wash Your Hand',
        message: 'Time to Wash your hands',
    });
});

browser.browserAction.onClicked.addListener(() => {
    var clearing = browser.notifications.clear(washNotification);
    clearing.then(() => {
        console.log('cleared');
    });
});
