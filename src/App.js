import logo from './logo.svg';
import './App.css';
const api = 'http://localhost:3000/'



const login = () => {
    fetch(`${api}login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: input.email, password:input.password})
    }).then(resp => resp.json())
    .then(data => {
      // stores response from fetch in the local storage of the users browser
      localStorage.setItem("token", data.token)
      setUser(data.user)
    })
}


function App() {
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
      </header>
    </div>
  );
}

export default App;
