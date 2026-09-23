importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBa-2qLQOyu7WfTJq96-UwiAh7kjIjpfic",
  authDomain: "my-first-project-fb14a.firebaseapp.com",
  databaseURL: "https://my-first-project-fb14a-default-rtdb.firebaseio.com",
  projectId: "my-first-project-fb14a",
  storageBucket: "my-first-project-fb14a.firebasestorage.app",
  messagingSenderId: "571066567740",
  appId: "1:571066567740:web:7fe3c92f7cd26ea7de8739"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title || "Relay";
  const notificationOptions = {
    body: payload.notification.body || "You have a new message.",
    icon: "/icon.png"
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
