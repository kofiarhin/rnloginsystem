import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpa4StEhuBffr8J9duSklfUcbJ886H_Pc",
    authDomain: "rnloginsystem.firebaseapp.com",
    databaseURL: "https://rnloginsystem.firebaseio.com",
    projectId: "rnloginsystem",
    storageBucket: "rnloginsystem.appspot.com",
    messagingSenderId: "462671656689",
    appId: "1:462671656689:web:de19f5c4c9c36dc4575b50"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;