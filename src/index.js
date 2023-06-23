import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';

clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')      // Web Testing
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({useIP: false})
clevertap.setLogLevel(3)
clevertap.event.push('CM Charged 2')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
