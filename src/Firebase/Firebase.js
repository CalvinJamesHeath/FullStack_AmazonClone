import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: "clone-e21b2.firebaseapp.com",
  projectId: "clone-e21b2",
  storageBucket: "clone-e21b2.appspot.com",
  messagingSenderId: "166566553862",
  measurementId: "G-S4FSVXCP5P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
