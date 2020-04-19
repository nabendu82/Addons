var gettingStoredStats = browser.storage.local.get();

gettingStoredStats.then(results => {
if (!results.stats) {
    results = {
        host: {},
        type: {}
    };
}

browser.webNavigation.onCommitted.addListener((evt) => {
    if (evt.frameId !== 0) {
        return;
    }
    let transitionType = evt.transitionType;
    results.type[transitionType] = results.type[transitionType] || 0;
    results.type[transitionType]++;
    browser.storage.local.set(results);
});

browser.webNavigation.onCompleted.addListener(evt => {
    if (evt.frameId !== 0) {
        return;
    }
    const url = new URL(evt.url);
    results.host[url.hostname] = results.host[url.hostname] || 0;
    results.host[url.hostname]++;
    browser.storage.local.set(results);
}, {
    url: [{schemes: ["http", "https"]}]});
});
