function showCookiesForTab(tabs) {
    let tab = tabs.pop();
    var gettingAllCookies = browser.cookies.getAll({ url: tab.url });
    gettingAllCookies.then((cookies) => {
        var activeTabUrl = document.getElementById('header-title');
        var text = document.createTextNode("Cookies at: " + tab.title);
        activeTabUrl.appendChild(text);
        var cookieList = document.getElementById('cookie-list');
        if (cookies.length > 0) {
            for (let cookie of cookies) {
                let li = document.createElement("li");
                let content = document.createTextNode(cookie.name + ": " + cookie.value);
                li.appendChild(content);
                cookieList.appendChild(li);
            }
        } else {
            let p = document.createElement("p");
            let content = document.createTextNode("No cookies in this tab.");
            let parent = cookieList.parentNode;
            p.appendChild(content);
            parent.appendChild(p);
        }
    });
}

function getActiveTab() {
    return browser.tabs.query({ currentWindow: true, active: true });
}
getActiveTab().then(showCookiesForTab);