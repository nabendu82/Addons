var webWindowId;
const contentBox = document.querySelector("#content");

window.addEventListener("mouseover", () => {
    contentBox.setAttribute("contenteditable", true);
});

window.addEventListener("mouseout", () => {
    contentBox.setAttribute("contenteditable", false);
    browser.tabs.query({ windowId: webWindowId, active: true }).then((tabs) => {
        let textToStore = {};
        textToStore[tabs[0].url] = contentBox.textContent;
        browser.storage.local.set(textToStore);
    });
});

function updateContent() {
    browser.tabs.query({ windowId: webWindowId, active: true })
        .then((tabs) => {
            return browser.storage.local.get(tabs[0].url);
        })
        .then((storedInfo) => {
            contentBox.textContent = storedInfo[Object.keys(storedInfo)[0]];
        });
}

browser.tabs.onActivated.addListener(updateContent);
browser.tabs.onUpdated.addListener(updateContent);
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
    webWindowId = windowInfo.id;
    updateContent();
});