import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDL-CzSYcpTpb32Nwh6BhJwYw9pqLAz2Io",
  authDomain: "webhook-fb-18e62.firebaseapp.com",
  databaseURL: "https://webhook-fb-18e62-default-rtdb.firebaseio.com",
  projectId: "webhook-fb-18e62",
  storageBucket: "webhook-fb-18e62.appspot.com",
  messagingSenderId: "931017985100",
  appId: "1:931017985100:web:e46ff9498e86fc335f38e9",
  measurementId: "G-8LMP690KNF"
};

let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
