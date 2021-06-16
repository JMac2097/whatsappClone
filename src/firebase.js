import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIZkunr-HLP11k7yi20Akq7fjAfV4wdb8",
    authDomain: "whatsappclone-a0fe0.firebaseapp.com",
    projectId: "whatsappclone-a0fe0",
    storageBucket: "whatsappclone-a0fe0.appspot.com",
    messagingSenderId: "932280641774",
    appId: "1:932280641774:web:aa8d4b18acb2cc1f4b6bff",
    measurementId: "G-74ETKZZEGS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
