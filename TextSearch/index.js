var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    var data = new FormData(form);
    var output = "";
    for (const entry of data) {
        output = entry[1];
    };

    browser.runtime.sendMessage({
        searchEngine: `${output}`
    })

    event.preventDefault();
}, false);