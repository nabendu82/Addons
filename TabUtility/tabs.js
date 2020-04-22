function listTabs() {
    getCurrentWindowTabs().then((tabs) => {
        let tabsList = document.getElementById('tabs-list');
        let currentTabs = document.createDocumentFragment();
        let limit = 10;
        let counter = 0;
        tabsList.textContent = '';
        for (let tab of tabs) {
            if (!tab.active && counter <= limit) {
                let tabLink = document.createElement('a');
                tabLink.textContent = tab.title || tab.id;
                tabLink.setAttribute('href', tab.id);
                tabLink.classList.add('switch-tabs');
                currentTabs.appendChild(tabLink);
            }
            counter += 1;
        }
        tabsList.appendChild(currentTabs);
    });
}

document.addEventListener("DOMContentLoaded", listTabs);

function getCurrentWindowTabs() {
    return browser.tabs.query({ currentWindow: true });
}

document.addEventListener("click", (e) => {
    function callOnActiveTab(callback) {
        getCurrentWindowTabs().then((tabs) => {
            for (var tab of tabs) {
                if (tab.active) {
                    callback(tab, tabs);
                }
            }
        });
    }
    if (e.target.id === "tabs-move-beginning") {
        callOnActiveTab((tab, tabs) => {
            var index = 0;
            if (!tab.pinned) {
                index = firstUnpinnedTab(tabs);
            }
            browser.tabs.move([tab.id], { index });
        });
    }
    if (e.target.id === "tabs-move-end") {
        callOnActiveTab((tab, tabs) => {
            var index = -1;
            if (tab.pinned) {
                var lastPinnedTab = Math.max(0, firstUnpinnedTab(tabs) - 1);
                index = lastPinnedTab;
            }
            browser.tabs.move([tab.id], { index });
        });
    }
    e.preventDefault();
});

function firstUnpinnedTab(tabs) {
    for (var tab of tabs) {
        if (!tab.pinned) {
            return tab.index;
        }
    }
}

//onMoved listener. fired when tab is moved
browser.tabs.onMoved.addListener((tabId, moveInfo) => {
    var startIndex = moveInfo.fromIndex;
    var endIndex = moveInfo.toIndex;
    console.log(`Tab with id: ${tabId} moved from index: ${startIndex} to index: ${endIndex}`);
});
