import React, { useState } from 'react';
import clevertap from 'clevertap-web-sdk';
import bell from '../assets/bell.png'

const Home = () => {
   const [text, setText] = useState('')

//    useEffect(() => {
//     clevertap.notifications.push({
//         "titleText":"Would you like to receive Push Notifications?",
//         "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
//         "okButtonText":"Ok",
//         "rejectButtonText":"Cancel",
//         "okButtonColor":"#F28046",
//         "askAgainTimeInSeconds":5,
//         "serviceWorkerPath": "./firebase-messaging-sw.js"
//     });
//    }, []);

   
    function clickEvent() {
        clevertap.event.push(text);   
    };

    // if (document.getElementById('wiz-iframe-intent')) {
    //     console.log('clicked')
    // } else {
    //     const t = setInterval(() => {
    //       if (document.getElementById('wiz-iframe-intent')) {
    //         const button = document.getElementById('wiz-iframe-intent').contentWindow.document.getElementById('ct_submitButton')
    //         button.addEventListener('click', () => {
    //             clevertap.event.push('React Web Test')
    //             clearInterval(t)
    //         });              
    //       }
    //     }, 3000)
    // } 
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
            <button id='bell-selector' style={{marginLeft: '16px'}}>Inbox</button>
            {/* <div id='bell-selector'><img style={{width: '24px', height: '24px'}} src={bell} className="bell-icon" alt="bell" /></div> */}
            <div style={{ marginTop: '10px'}}>
                <button onClick={enablePush}>Enable Push Notifications</button>
            </div>
            <div className="heroDiv" style={{ marginTop: '10px'}}></div>
            <div id="heroDiv" style={{ marginTop: '10px'}}></div>
            <div>{navigator.userAgent}</div>
            <div>{clevertap.getCleverTapID()}</div>
            <div id="ctId"></div>
            <div id="lsData"></div>
            {/* <div style={{ position: 'fixed', bottom: 0, marginBottom: '20px' }}><button  id='bell-selector' style={{ marginLeft: '8px'}}>Inbox</button></div> */}
        </div>
    );
};

export default Home;