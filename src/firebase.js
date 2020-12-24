import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNgs-UGTvRaK8cVA1NRtfGzqYOeXQE6s4",
  authDomain: "vistrit-imessages.firebaseapp.com",
  projectId: "vistrit-imessages",
  storageBucket: "vistrit-imessages.appspot.com",
  messagingSenderId: "169618649807",
  appId: "1:169618649807:web:a767e57aa6108dfcc6bdba",
  measurementId: "G-F1B8JWTZR8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
