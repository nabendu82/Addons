var myWindowId;
const contentBox = document.querySelector("#content");
/*
Make the content box editable as soon as the user mouses over the sidebar.
*/
window.addEventListener("mouseover", () => {
    contentBox.setAttribute("contenteditable", true);
});

/*
When the user mouses out, save the current contents of the box.
*/
window.addEventListener("mouseout", () => {
    contentBox.setAttribute("contenteditable", false);
    let contentToStore = {};
    contentToStore['contentText'] = contentBox.value;
    browser.storage.local.set(contentToStore);
});


browser.storage.local.get().then(results => {
    if(results.contentText === undefined)
        contentBox.value = "Type any Content";
    else
        contentBox.value = results['contentText'];
});


