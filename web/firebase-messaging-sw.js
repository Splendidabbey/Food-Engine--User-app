importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDSNHrTUp_U17_B1t4BbGjsE-QKoSIMVk0",
    authDomain: "foodengine-6bf67.firebaseapp.com",
    projectId: "foodengine-6bf67",
    storageBucket: "foodengine-6bf67.firebasestorage.app",
    messagingSenderId: "744818082958",
    appId: "1:744818082958:web:c363414537aacef3ce75df",
    measurementId: "G-E15R0QR5G8",
    databaseURL: "...",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});