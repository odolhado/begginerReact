const state = {eventCount: 0, username: ''};

function App() {
  return (
    <div>
      <p>
        There have been {state.eventCount} events
      </p>
      <p>
        <button onClick={increment}>⚛️</button>
      </p>
      <p>You typed: {state.username}</p>
      <p>
        <input/>
      </p>
    </div>
  )
}

function increment   () {
  setState({eventCount: state.eventCount + 1})
}


function setState(newState) {
  Object.assign(state, newState);
  renderApp()
}

function renderApp() {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
}




renderApp();
setState({username: 'Odo', eventCount: 10})

