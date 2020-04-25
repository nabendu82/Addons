function updateUI(restoredSettings) {
    const selectList = document.querySelector("#since");
    selectList.value = restoredSettings.since;

    const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
    for (let item of checkboxes) {
        if (restoredSettings.dataTypes.indexOf(item.getAttribute("data-type")) != -1) {
            item.checked = true;
        } else {
            item.checked = false;
        }
    }
}

function onError(e) {
    console.error(e);
}

function storeSettings() {
    function getSince() {
        const since = document.querySelector("#since");
        return since.value;
    }
    function getTypes() {
        let dataTypes = [];
        const checkboxes = document.querySelectorAll(".data-types [type=checkbox]");
        for (let item of checkboxes) {
            if (item.checked) {
                dataTypes.push(item.getAttribute("data-type"));
            }
        }
        return dataTypes;
    }
    const since = getSince();
    const dataTypes = getTypes();
    browser.storage.local.set({
        since,
        dataTypes
    });
}

const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", storeSettings);

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(updateUI, onError);


