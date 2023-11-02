chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "loading" && tab.active) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
            var tab = tabs[0];
            const url = new URL(tab.url);
            fetch(`http://localhost:3000/?domain=${url.hostname}`)
            .then(() => {
              console.log(`request sent to ${url.hostname}`);
            }).catch((err) => {
              console.log(err);
            })
        });
    }
});



