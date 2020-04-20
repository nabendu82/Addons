let blockedHosts = ["example.com", "example.org"];

browser.runtime.onInstalled.addListener(details => {
    browser.storage.local.set({
        blockedHosts: blockedHosts
    });
});

browser.storage.local.get(data => {
    if (data.blockedHosts) {
        blockedHosts = data.blockedHosts;
    }
});

browser.storage.onChanged.addListener(changeData => {
    blockedHosts = changeData.blockedHosts.newValue;
});

browser.proxy.onRequest.addListener(handleProxyRequest, { urls: ["<all_urls>"] });

function handleProxyRequest(requestInfo) {
    const url = new URL(requestInfo.url);
    if (blockedHosts.indexOf(url.hostname) != -1) {
        console.log(`Proxying: ${url.hostname}`);
        return { type: "http", host: "127.0.0.1", port: 65535 };
    }
    return { type: "direct" };
}

browser.proxy.onError.addListener(error => {
    console.error(`Proxy error: ${error.message}`);
});