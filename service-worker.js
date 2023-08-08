chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url.includes("https://www.facebook.com/stories")) {
        try {
            await chrome.scripting.executeScript({
                target: { tabId },
                files: ['story.js']
            });
        } catch (err) {
            console.log(err);
        }
    }
});

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}