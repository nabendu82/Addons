var url = "";

// create a context menu
browser.contextMenus.create({
    id: 'text-search',
    title: 'Text Search',
    contexts: ['selection']
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
    let urlWithText = "";
    if (!url)
        urlWithText = 'https://www.google.com/search?q=' + info.selectionText;
    else
        urlWithText = `${url}${info.selectionText}`;

    browser.tabs.create({ url: urlWithText });
}


function handleFormSelection(data) {
    browser.notifications.create({
        "type": "basic",
        "iconUrl": browser.extension.getURL('icons/logo_64.png'),
        "title": "Updated Search Engine",
        "message": data.searchEngine.toUpperCase()
    })

    switch (data.searchEngine) {
        case 'google': url = 'https://www.google.com/search?q=';
            break;
        case 'twitter': url = 'https://twitter.com/search?q=';
            break;
        case 'quora': url = 'https://www.quora.com/search?q=';
            break;
        case 'youtube': url = 'https://www.youtube.com/results?search_query=';
            break;
        case 'bing': url = 'https://www.bing.com/search?q=';
            break;
        case 'yahoo': url = 'https://search.yahoo.com/search?p=';
            break;
        case 'duckduckgo': url = 'https://duckduckgo.com/?q=';
            break;
    }
}

browser.runtime.onMessage.addListener(handleFormSelection);
