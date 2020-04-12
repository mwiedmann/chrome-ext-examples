import * as React from 'react'
import * as ReactDOM from 'react-dom'

const App = () => {
    const [links, setLinks] = React.useState<string[]>([])
    React.useEffect(() => {
      chrome.storage.local.get(['key'], result => {
        const items: string[] = result && result.key
          ? result.key.split(',')
          : []
       
        setLinks(items)
      })
    }, [])

    return (
      <>
        <h1>Recent Projects</h1>
        <ul>
          {links.map((l, i) => <li key={i}><a href={l} target="_blank">{l}</a></li>)}
        </ul>
      </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));