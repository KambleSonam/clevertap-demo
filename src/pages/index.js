import React, { useState, useEffect } from 'react';
import clevertap from 'clevertap-web-sdk';

const Home = () => {
   const [text, setText] = useState('')

   useEffect(() => {
        document.addEventListener('CT_web_native_display', function(e) {
            console.log('Key value data ', e);
            clevertap.renderNotificationClicked(e.detail)
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
            "askAgainTimeInSeconds":15,
            "hidePoweredByCT": true,
            "serviceWorkerPath": "./clevertap_sw.js",
        });
    }

    function generateRandomAlphanumeric() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function processOUL() {
        const randomIdentity = generateRandomAlphanumeric();
        clevertap.onUserLogin.push({
            "Site": {
                "Name": "Kit",
                "Identity": randomIdentity.toString(),
                "Email": "sonamtamgadge@test.com"
            }
        })
    }

    function chargedPush() {
        clevertap.event.push('Charged')
    }

    return (
        <div>
            <h1 id="hello">Welcome !!!</h1>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={clickEvent} style={{ marginLeft: '8px'}}>Event Push</button>
            {/* <button id='bell-selector' style={{marginLeft: '16px'}}>Inbox</button> */}
            <div style={{ marginTop: '10px'}}>
                <button onClick={enablePush}>Enable Push Notifications</button>
            </div>
            <div className="heroDi1v" style={{ marginTop: '10px'}}></div>
            <div id="reportsDownloadCTCampaignId" style={{ marginTop: '10px'}}></div>
            <button onClick={processOUL}>On User Login</button>
            <button onClick={chargedPush} style={{ marginLeft: '16px'}}>Charged Event Push</button>
            <div style={{ marginTop: '16px'}}>{navigator.userAgent}</div>
            <div style={{ marginTop: '16px'}}>{clevertap.getCleverTapID()}</div>
            <div id="ctId"></div>
            <div id="lsData"></div>
            <div style={{ height: '3000px'}}></div>
            {/* <div style={{ position: 'fixed', bottom: 0, marginBottom: '20px' }}><button  id='bell-selector' style={{ marginLeft: '8px'}}>Inbox</button></div> */}
        </div>
    );
};

export default Home;