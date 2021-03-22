import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Team Logistics Nig Ltd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Under Construction
        </a>
      </header>
    </div>
  );
}

export default App;