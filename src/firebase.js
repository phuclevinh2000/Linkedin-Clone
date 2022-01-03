import firebase from 'firebase/app';

import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore
import 'firebase/storage'; // for storage

const firebaseConfig = {
  apiKey: 'AIzaSyDFl1FRSz3iMh-rFlSHKSx-cGyyPKPbpFI',
  authDomain: 'linkedln-clone-385ca.firebaseapp.com',
  projectId: 'linkedln-clone-385ca',
  storageBucket: 'linkedln-clone-385ca.appspot.com',
  messagingSenderId: '565525812229',
  appId: '1:565525812229:web:8e715606a3c1d6650db86c',
  measurementId: 'G-472BDBL43G',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
