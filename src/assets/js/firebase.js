import firebase from 'firebase';

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyDLdHCFcjsLS06aDXpiwu7yt_88SeWdHV8",
        authDomain: "enpit-2019.firebaseapp.com",
        databaseURL: "https://enpit-2019.firebaseio.com",
        projectId: "enpit-2019",
        storageBucket: "enpit-2019.appspot.com",
        messagingSenderId: "82180515938"
    };
    firebase.initializeApp(config);
}

export default firebase;