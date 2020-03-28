var motivationNotification = 'dev-notification';

browser.alarms.create('', { periodInMinutes: 60 });

function getRandom() {
    var quotes = [
        'Stay Hungry. Stay Foolish. - Steve Jobs',
        'Good Artists Copy, Great Artists Steal. - Pablo Picasso',
        'Argue with idiots, and you become an idiot. - Paul Graham',
        'Be yourself; everyone else is already taken. - Oscar Wilde',
        'Simplicity is the ultimate sophistication. - Leonardo Da Vinci',
        'Changing the world one code at a time. - Unknown',
        'In real open source, you have the right to control your own destiny - Linus Torvalds',
        'Code long and prosper - Unknown',
        'Success is something you attract by the person you become. - Jim Rohn',
        'Why fit in when you were born to stand out? - Dr. Seuss',
        'You are the average of the five people you spend the most time with. - Jim Rohn',
        'If you run around with 9 losers pretty soon you’ll be the 10th loser. - Les Brown',
        'You can change what you are and where you are by changing what goes into your mind. - Zig Ziglar',
        'I think it is possible for ordinary people to choose to be extraordinary. - Elon Musk',
        'Websites promote you 24/7: No employee will do that. - Paul Cookson',
        'First, solve the problem. Then, write the code. - John Johnson',
        'Programs must be written for people to read, and only incidentally for machines to execute. - Abelson',
        'Programming can be fun, so can cryptography; however they should not be combined. - Kreitzberg',
        'Before software can be reusable it first has to be usable. - Ralph Johnson',
        'Without requirements or design, programming is the art of adding bugs to an empty text file. - Louis Srygley',
        'Java is to JavaScript what Car is to Carpet. - Chris Heilmann'
    ];

    return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

browser.alarms.onAlarm.addListener(function (alarm) {
    browser.notifications.create(motivationNotification, {
        type: 'basic',
        iconUrl: browser.extension.getURL('icons/icon64.png'),
        title: 'Dev Quotes',
        message: getRandom()
    });
});

browser.browserAction.onClicked.addListener(() => {
    var clearing = browser.notifications.clear(motivationNotification);
    clearing.then(() => {
        console.log('cleared');
    });
});