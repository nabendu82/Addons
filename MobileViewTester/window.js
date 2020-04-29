document.addEventListener("click", (e) => {
    function getCurrentWindow() {
        return browser.windows.getCurrent();
    }

    if (e.target.id === "iphone-5") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 320,
                height: 568
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "iphone-6") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 375,
                height: 667
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "iphone-6plus") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 414,
                height: 736
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "iphone-x") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 375,
                height: 812
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "pixel-2") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 411,
                height: 731
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "pixel-2-xl") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 411,
                height: 823
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "galaxy-s5") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 360,
                height: 740
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "galaxy-note-8") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 360,
                height: 740
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "galaxy-note-10") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 360,
                height: 718
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    } else if (e.target.id === "lg-g3") {
        getCurrentWindow().then((currentWindow) => {
            var updateInfo = {
                width: 360,
                height: 640
            };
            browser.windows.update(currentWindow.id, updateInfo);
        });
    }

    e.preventDefault();
});
