document
  .getElementsByTagName("button")[0]
  .addEventListener('click', () => {
    chrome.tabs.create({ url: "https://google.com" }) 
  })
