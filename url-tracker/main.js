chrome.storage.local.get(['key'], result => {
  const items = result && result.key
    ? result.key.split(',').map(i => { return `<li><a href='${i}' target='_blank' />${i}</li>`})
    : []
  document.getElementById('list').innerHTML = items.join('')
})