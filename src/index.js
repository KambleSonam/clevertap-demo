import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';


clevertap.init('W9R-486-4W5Z')
  // clevertap.init('R7W-ZKK-Z85Z') // Upgrad
// clevertap.init('W48-7W7-495Z', 'sk1-staging-4', 'wzrkt.com')      // QA Warrior
// clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')      // Web Testing
// clevertap.init('RWW-WWW-WW4Z', 'sk1-staging-13', 'wzrkt.com')      // Hello Kitty
// clevertap.init('4R4-5K9-475Z', 'sk1-staging-13', 'wzrkt.com')      // Hello Kitty


clevertap.dismissSpamControl = true
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({useIP: false})
// clevertap.event.push('test03')
clevertap.setLogLevel(3)

// clevertap.init('4R4-5K9-475Z', 'sk1-staging-4', 'wzrkt.com')

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
