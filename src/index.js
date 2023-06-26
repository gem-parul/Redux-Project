import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* /Linking react and redux */}
    <Provider store={store}>
        <App />
    </Provider>
    
  </React.StrictMode>
);
