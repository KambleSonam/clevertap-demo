import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';


// clevertap.enableCustomCleverTapId = true

// console.log('before', clevertap.enableCustomCleverTapId)
// clevertap.init('W9R-486-4W5Z')              // Clevertap Sample

// clevertap.init('ZWW-WWW-WWRZ')              // Bearded Robot eu1
// clevertap.init('W6Z-6Z5-975Z')              // Jay Demo
// clevertap.init('ZWW-WWW-WW4Z', 'in1')       // Bearded Robot
// clevertap.init('6Z8-875-R85Z', 'us1')          // AccCreation2

// clevertap.init('75R-654-5Z6Z')              // Test- Jitendra

// clevertap.init('W48-7W7-495Z', 'sk1-staging-4', 'wzrkt.com')      // QA Warrior
// clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')      // Web Testing
// clevertap.init('4R4-5K9-475Z', 'sk1-staging-4', 'wzrkt.com')      // noc internal

clevertap.init('884-5ZW-8Z7Z', 'sk1-staging-4', 'wzrkt.com')      // Web Testing


// clevertap.init('67Z-R86-ZW7Z', 'wus2', 'clevertap-prod-az.com')      

// clevertap.init('468-RZW-ZK6Z', 'sk1-staging-30', '', '012-b64')  //mobile_channels

clevertap.privacy.push({useIP: true})
clevertap.privacy.push({ optOut: false });
clevertap.setLogLevel(3)


// console.log('after', clevertap.enableCustomCleverTapId)

// clevertap.init('RWW-WWW-WW4Z', 'sk1-staging-13', 'wzrkt.com')      // Hello Kitty
// clevertap.init('4R4-5K9-475Z', 'sk1-staging-13', 'wzrkt.com')      // Hello Kitty
// clevertap.event.push('React Web Test')
// clevertap.init('W88-6WZ-686Z', 'sg1')            // sg1 test account
clevertap.dismissSpamControl = true
// clevertap.enableCustomCleverTapId = true

// clevertap.event.push('test03')
// clevertap.spa = true
// clevertap.onUserLogin.push({
//   "Site": {
//       "Name": "Cat",
//       "Identity": "MNCat27",
//   }
// })
// clevertap.event.push('React Web Test')
// clevertap.onUserLogin.push({
//   "Site": {
//       "Name": "milo",
//       "Identity": "milo29aug",
//   }
// }, "milo@4780e36f1758a7cb")

// clevertap.event.push('React Web Test')

//   [["dope12july2023","bfe8a4b08d7546efab754ceb46125159"],["mania12july2023","e350d8b88cdf424582653720a8c2af33"]]
// clevertap.event.push('CM Added To Cart 31')
// clevertap.onUserLogin.push({ "Site": { "Name": "Web User", "Email": "abc@example.com", "Identity": "xyz123", "Custom_Tag": "Champion" } })
// clevertap.event.push("Web Push View",{"Product Name":"Product1","category":"cat1","date_time":new Date("July 03, 2020 09:30:00"),"cartValue":10,"epoch_value":"$D_1594717641"});
// clevertap.event.push("custom html event");
// clevertap.onUserLogin.push({ "Site": { "Name": "Web User", "Email": "abc@example.com", "Identity": "xyz123", "Custom_Tag": "Champion" } });//9889

// clevertap.event.push('Validation test')

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
