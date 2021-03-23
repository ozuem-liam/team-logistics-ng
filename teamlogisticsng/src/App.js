import logo from './logo.svg';
import './App.css';

// components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Company from './components/Company';
import Services from './components/Services';
import CustomerSupport from './components/CustomerSupport';
import AirfreightRates from './components/AirfreightRates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Company />
      <Services />
      <CustomerSupport />
      <AirfreightRates />
      <Contact />
      <Footer />
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
