import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyArVWlYeJfgzC6b3cqQrSuoZjj8UFM8S-M",
  authDomain: "facebook-mern-vishal.firebaseapp.com",
  projectId: "facebook-mern-vishal",
  storageBucket: "facebook-mern-vishal.appspot.com",
  messagingSenderId: "815079022720",
  appId: "1:815079022720:web:e0e225106d394be8788665"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider()


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, provider }
export default db