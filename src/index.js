import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';


// clevertap.enableCustomCleverTapId = true

// console.log('before', clevertap.enableCustomCleverTapId)
// clevertap.init('W9R-486-4W5Z')              // Clevertap Sample
// clevertap.init('K99-655-Z96Z', '', '', '556-cc3')              // Demo Ecommerce

// clevertap.init('WWW-WWW-WWRZ')              // Bearded Robot eu1
// clevertap.init('W6Z-6Z5-975Z')              // Jay Demo
// clevertap.init('ZWW-WWW-WW4Z', 'in1')       // Bearded Robot
// clevertap.init('6Z8-875-R85Z', 'us1')          // AccCreation2

// clevertap.init('75R-654-5Z6Z')              // Test- Jitendra

// clevertap.init('W48-7W7-495Z', 'sk1-staging-4', 'wzrkt.com')      // QA Warrior
// clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')      // Web Testing
// clevertap.init('4R4-5K9-475Z', 'sk1-staging-4', 'wzrkt.com')      // noc internal
// clevertap.init('RZK-797-6Z7Z', 'sk1-staging-4', 'wzrkt.com')      // Test-Sonam
// clevertap.init('WRK-485-456Z', 'sk1-staging-16', 'wzrkt.com')      // Web Testing
// clevertap.init('6Z8-875-R85Z', 'us1', '', '5ab-b16')
// clevertap.init('884-5ZW-8Z7Z', 'sk1-staging-4')    
// clevertap.enableFetchApi = true
clevertap.init('884-5ZW-8Z7Z', 'sk1-staging-4', 'wzrkt.com', '015-4bb')

// clevertap.init('67Z-R86-ZW7Z', 'wus2', 'clevertap-prod-az.com')      

// clevertap.init('468-RZW-ZK6Z', 'sk1-staging-30', '', '012-b64')  //mobile_channels

clevertap.privacy.push({useIP: true})
clevertap.privacy.push({ optOut: false });
clevertap.setLogLevel(4)

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
