import logo from './logo.svg';
import './App.css';

import SockJsClient from 'react-stomp';

function App() {
 var cli;
  const handleClickSendTo = () => {
    const s = { name: "USER", session: "0", content: 1 }
    cli.sendMessage("/ws/sendTo", JSON.stringify(s));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SockJsClient
          url="http://localhost:5000/ws/connect"
          topics={['/topic/sendTo', '/topic/template', '/topic/api']}
          onMessage={msg => { console.log(msg); }}
          ref={(client) => { cli = client; }}
        />

        <button onClick={handleClickSendTo}>SendTo</button>


      </header>
    </div>
  );
}

export default App;
