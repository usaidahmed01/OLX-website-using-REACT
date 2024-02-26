import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Router from './config/router';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          {/* <header className="App-header"> */}
          {/* <><Header /></> */}

          <div><Router /></div>

          {/* <div><Footer /></div> */}

          {/* </header> */}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
