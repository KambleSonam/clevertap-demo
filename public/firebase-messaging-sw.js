/* eslint-disable */
importScripts('https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js');// remove CleverTap server worker from your root folder
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJFCQFUrNYx_D8-FDFSU1mrsWE4cH-SwE",
  authDomain: "clevertap-demo-c1671.firebaseapp.com",
  projectId: "clevertap-demo-c1671",
  storageBucket: "clevertap-demo-c1671.appspot.com",
  messagingSenderId: "848240448029",
  appId: "1:848240448029:web:3c6e7062305a00fac82cf4",
  measurementId: "G-8QC7JK4XGF"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBC-EEhKO1MOpEJWEZaYm-ox8NM0WTQltg",
//     authDomain: "demowebsdk.firebaseapp.com",
//     projectId: "demowebsdk",
//     storageBucket: "demowebsdk.appspot.com",
//     messagingSenderId: "126540632719",
//     appId: "1:126540632719:web:e0fba5dcd61fc6bb70d6fa",
//   };
// Initialize Firebase
if(firebase.messaging.isSupported()) {
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
}