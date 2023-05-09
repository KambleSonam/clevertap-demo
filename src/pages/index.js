import React, { useState, useEffect } from 'react';
import clevertap from 'clevertap-web-sdk';

const Home = () => {
   const [text, setText] = useState('')

   useEffect(() => {
    // document.addEventListener('CT_web_native_display', function(e) {
    //     console.log('Event is ', clevertap.renderNotificationViewed(e.detail))
    //   })
        document.getElementById('ctId').innerHTML = clevertap.getCleverTapID()

        // var LRU_CACHE = decodeURIComponent(localStorage["WZRK_CAMP"]);
        // var WZRK_META = decodeURIComponent(localStorage["WZRK_META"]);
        // var WZRK_G = decodeURIComponent(localStorage["WZRK_G"]);
        // var WZRK_EV = decodeURIComponent(localStorage["WZRK_EV"]);
        // var WZRK_ARP = decodeURIComponent(localStorage["WZRK_ARP"]);

        // var data = `<div>WZRK_K: ${WZRK_META}</div><br /><div>WZRK_G: ${WZRK_G}</div><br /><div>LRU_CAHCE: ${LRU_CACHE}</div><br /><div>WZRK_EV: ${WZRK_EV}</div><br /><div>WZRK_ARP: ${WZRK_ARP}</div>`;

        // document.getElementById("lsData").innerHTML = data;
   }, []);

    function clickEvent() {
        clevertap.event.push(text);
    };

    function enablePush() {
        clevertap.notifications.push({
            "titleText":"Would you like to receive Push Notifications?",
            "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
            "okButtonText":"Ok",
            "rejectButtonText":"Cancel",
            "okButtonColor":"#F28046",
            "askAgainTimeInSeconds":5,
            "serviceWorkerPath": "./firebase-messaging-sw.js"
        });
    }
    
    return (
        <div>
            <h1>Welcome !!!</h1>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={clickEvent} style={{ marginLeft: '8px'}}>Event Push</button>
            <div style={{ marginTop: '10px'}}>
                <button onClick={enablePush}>Enable Push Notifications</button>
            </div>
            <div className="chetanclass" style={{ marginTop: '10px'}}></div>
            <div id="CM01" style={{ marginTop: '10px'}}></div>
            <div>{navigator.userAgent}</div>
            <div id="ctId"></div>
            <div id="lsData"></div>
            <div style={{ position: 'fixed', bottom: 0, marginBottom: '20px' }}><button  id='bell-selector' style={{ marginLeft: '8px'}}>Inbox</button></div>
        </div>
    );
};

export default Home;