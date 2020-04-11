const App = () => {
  const clickHandler = () => chrome.runtime.sendMessage({ message: 'Hello, World'})

  return React.createElement("button", { onClick: clickHandler }, "Send Message to Background")
}

ReactDOM.render(React.createElement(App), document.getElementById('react-root'))