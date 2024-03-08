import './App.css';
import Router from './config/router';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <div><Router /></div>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
