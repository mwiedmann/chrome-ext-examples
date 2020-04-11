const App = () => {
  const clickHandler = () => chrome.runtime.sendMessage({ message: 'Hello, World'})

  return <button onClick={clickHandler}>Send Message to Background</button>
}

ReactDOM.render(<App/ >, document.getElementById('react-root'))