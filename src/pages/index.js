import React, { useState, useEffect } from 'react';
import clevertap from 'clevertap-web-sdk';

const Home = () => {
   const [text, setText] = useState('')

   useEffect(() => {
    document.addEventListener('CT_web_native_display', function(e) {
        console.log('Event is ', clevertap.renderNotificationViewed(e.detail))
      })
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
            <div id="hero-banner" style={{ marginTop: '10px'}}></div>
            <div>{navigator.userAgent}</div>
            {/* <div style={{ position: 'fixed', bottom: 0, marginBottom: '20px' }}><button  id='bell-selector' style={{ marginLeft: '8px'}}>Inbox</button></div> */}
        </div>
    );
};

export default Home;