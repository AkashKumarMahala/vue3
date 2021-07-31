import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACL_HVM3YmE3SUBIKWTDhLSE5pdtbEJPE",
    authDomain: "vue-authentication-f307e.firebaseapp.com",
    projectId: "vue-authentication-f307e",
    storageBucket: "vue-authentication-f307e.appspot.com",
    messagingSenderId: "29040946342",
    appId: "1:29040946342:web:fa61a68a343e89aac0d867"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

