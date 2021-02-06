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


//////////////////////////////////////////////////////////////////////////////
export const createUserProfileDocument = async (userAuth, additionalData) =>  {
  if (!userAuth) {
    return null;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }
    catch (err) {
      console.log('ERROR creating user', err.message);
    }  
  }
  return userRef;
}

//////////////////////////////////////////////////////////////////////////////

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef,objectsToAdd);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj) ;
  });

  return await batch.commit();
}


//////////////////////////////////////////////////////////////////////////////

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const {title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()]= collection;
    return accumulator;
  }, {});
}


//////////////////////////////////////////////////////////////////////////////

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

