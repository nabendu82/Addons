const ZOOM_INCREMENT = 0.2;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.3;
const DEFAULT_ZOOM = 1;

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
    } else if (e.target.id === "tabs-duplicate") {
        callOnActiveTab((tab) => {
            browser.tabs.duplicate(tab.id);
        });
    } else if (e.target.id === "tabs-reload") {
        callOnActiveTab((tab) => {
            browser.tabs.reload(tab.id);
        });
    } else if (e.target.id === "tabs-remove") {
        callOnActiveTab((tab) => {
            browser.tabs.remove(tab.id);
        });
    } else if (e.target.id === "tabs-create") {
        browser.tabs.create({});
    } else if (e.target.id === "tabs-alertinfo") {
        callOnActiveTab((tab) => {
            let props = "";
            for (let item in tab) {
                props += `${item} = ${tab[item]} \n`;
            }
            alert(props);
        });
    } else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
            var gettingZoom = browser.tabs.getZoom(tab.id);
            gettingZoom.then((zoomFactor) => {
                if (zoomFactor >= MAX_ZOOM) {
                    alert("Tab zoom factor is already at max!");
                } else {
                    var newZoomFactor = zoomFactor + ZOOM_INCREMENT;
                    newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
                    browser.tabs.setZoom(tab.id, newZoomFactor);
                }
            });
        });
    } else if (e.target.id === "tabs-decrease-zoom") {
        callOnActiveTab((tab) => {
            var gettingZoom = browser.tabs.getZoom(tab.id);
            gettingZoom.then((zoomFactor) => {
                if (zoomFactor <= MIN_ZOOM) {
                    alert("Tab zoom factor is already at minimum!");
                } else {
                    var newZoomFactor = zoomFactor - ZOOM_INCREMENT;
                    newZoomFactor = newZoomFactor < MIN_ZOOM ? MIN_ZOOM : newZoomFactor;
                    browser.tabs.setZoom(tab.id, newZoomFactor);
                }
            });
        });
    } else if (e.target.id === "tabs-default-zoom") {
        callOnActiveTab((tab) => {
            var gettingZoom = browser.tabs.getZoom(tab.id);
            gettingZoom.then((zoomFactor) => {
                if (zoomFactor == DEFAULT_ZOOM) {
                    alert("Tab zoom is already at the default zoom factor");
                } else {
                    browser.tabs.setZoom(tab.id, DEFAULT_ZOOM);
                }
            });
        });
    } else if (e.target.classList.contains('switch-tabs')) {
        var tabId = +e.target.getAttribute('href');
        browser.tabs.query({
            currentWindow: true
        }).then((tabs) => {
            for (var tab of tabs) {
                if (tab.id === tabId) {
                    browser.tabs.update(tabId, {
                        active: true
                    });
                }
            }
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
