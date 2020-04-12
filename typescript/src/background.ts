chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.match(/\.goinmo\.com\/projects\/\d+/)) {
        chrome.storage.local.get(['key'], result => {
            // Skip if we already have this URL
            if (result.key && result.key.includes(tab.url)) {
                return
            }
            const value = result.key ? `${result.key},${tab.url}` : tab.url
            chrome.storage.local.set({key: value});
        })
    }
})