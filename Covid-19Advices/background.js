var covid19Notification = 'covid19-notification';

browser.alarms.create('', { periodInMinutes: 60 });

function getRandom() {
    var quotes = [
        {title: 'Wash your hands frequently', message: 'Regularly clean your hands with an alcohol-based hand-rub or soap and water.'},
        {title: 'Maintain social distancing', message: 'Maintain at least 1 metre distance between yourself and anyone else.'},
        {title: 'Avoid touching eyes, nose and mouth', message: 'Hands can transfer the virus to your eyes, nose or mouth.'},
        {title: 'Practice respiratory hygiene', message: 'Make sure you, and the people around you, follow good respiratory hygiene.'},
    ];

    return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

browser.alarms.onAlarm.addListener(function () {
    let randomMsg = getRandom();
    browser.notifications.create(covid19Notification, {
        type: 'basic',
        iconUrl: browser.extension.getURL('icons/icon.png'),
        title: randomMsg.title,
        message: randomMsg.message
    });
});

browser.browserAction.onClicked.addListener(() => {
    var clearing = browser.notifications.clear(covid19Notification);
    clearing.then(() => {
        console.log('cleared');
    });
});
