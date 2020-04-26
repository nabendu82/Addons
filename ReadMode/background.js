function failureCallback() {
    browser.notifications.create({
        type: "basic",
        iconUrl: browser.extension.getURL('icons/logo_32.png'),
        title: "Info",
        message: "Reader Mode not available"
    });
}

browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.toggleReaderMode(tab.id)
        .then()
        .catch(failureCallback);
});