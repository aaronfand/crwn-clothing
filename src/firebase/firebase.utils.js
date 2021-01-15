import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDKl3OLyAvQ072cdqQBBpFPk0RARIQ0wT4",
    authDomain: "crwn-db-bbe94.firebaseapp.com",
    projectId: "crwn-db-bbe94",
    storageBucket: "crwn-db-bbe94.appspot.com",
    messagingSenderId: "542794511999",
    appId: "1:542794511999:web:75ce415e2001f47214314a"
  };

  firebase.initializeApp(config);
  
 export const auth = firebase.auth();
 export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider() ;
 provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

