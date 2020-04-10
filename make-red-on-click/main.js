document
  .getElementsByTagName("button")[0]
  .addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const currentTab = tabs[0]
      chrome.tabs.executeScript(currentTab.id, { code: "document.body.style.backgroundColor = 'red'" })
    }) 
  })
