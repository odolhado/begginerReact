const state = {eventCount: 0, username: ''};

function App() {
  return (
    <div>
      <p>
        There have been {state.eventCount} events
      </p>
      <p>
        <button onClick={increment}>⚛️</button>
        <button onMouseOver={increment}>⚛mouseover️</button>
        <button onFocus={increment}>⚛focus</button>
      </p>
      <p>You typed: {state.username}</p>
      <p>
        <input
          onChange = {updateUsername}
        />
      </p>
      <StopWatch />
    </div>
  )
}

class StopWatch extends React.Component{
  state = {lapse: 10, running: false};
  handleRunClick = () => {
    this.setState(state => {
      if(state.running) {
        console.log('handleRunClick clearInterval')

        clearInterval(this.timer)
      } else {
        console.log('handleRunClick setInterval')

        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({
            lapse: Date.now() - startTime
          })
        });
        this.setState({running: !this.state.running})
      }
      return {running: !state.running}
    });
  };
  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({lapse: 0, running: false})
  };
  render() {
    const {lapse, running} = this.state;
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200,
    }
    return (
      <div>
        <label htmlFor="">{lapse}ms</label>
        <button onClick={this.handleRunClick} style={buttonStyles}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleClearClick} style={buttonStyles}>Clear</button>
      </div>
    )
  }
}
function updateUsername (event) {
  setState({username: event.target.value})
}

function increment() {
  setState({eventCount: state.eventCount + 1})
}

function setState(newState) {
  console.log('setState?', state, newState);
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
// setState({username: 'Odo', eventCount: 10});

