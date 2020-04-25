var defaultSettings = {
    since: "hour",
    dataTypes: ["history", "downloads"]
};

function onError(e) {
    console.error(e);
}

function checkStoredSettings(storedSettings) {
    if (!storedSettings.since || !storedSettings.dataTypes) {
        browser.storage.local.set(defaultSettings);
    }
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkStoredSettings, onError);

function forget(storedSettings) {
    function getSince(selectedSince) {
        if (selectedSince === "forever") {
            return 0;
        }
        const times = {
            hour: () => { return 1000 * 60 * 60 },
            day: () => { return 1000 * 60 * 60 * 24 },
            week: () => { return 1000 * 60 * 60 * 24 * 7 }
        }
        const sinceMilliseconds = times[selectedSince].call();
        return Date.now() - sinceMilliseconds;
    }
    function getTypes(selectedTypes) {
        let dataTypes = {};
        for (let item of selectedTypes) {
            dataTypes[item] = true;
        }
        return dataTypes;
    }
    const since = getSince(storedSettings.since);
    const dataTypes = getTypes(storedSettings.dataTypes);
    function notify() {
        let dataTypesString = Object.keys(dataTypes).join(", ");
        let sinceString = new Date(since).toLocaleString();
        browser.notifications.create({
            "type": "basic",
            "title": "Removed browsing data",
            "message": `Removed ${dataTypesString}\nsince ${sinceString}`
        });
    }
    browser.browsingData.remove({ since }, dataTypes).then(notify);
}

browser.browserAction.onClicked.addListener(() => {
    const gettingStoredSettings = browser.storage.local.get();
    gettingStoredSettings.then(forget, onError);
});