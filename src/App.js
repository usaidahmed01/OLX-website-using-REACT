import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Router from './config/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <><Header /></> */}

        <div><Router /></div>

        {/* <div><Footer /></div> */}

      </header>
    </div>
  );
}

export default App;
