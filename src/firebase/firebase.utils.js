import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBzNb4LaCg2QvQpFgh35xd58SZpFtPCLKw",
  authDomain: "clothing-shop-12dc5.firebaseapp.com",
  databaseURL: "https://clothing-shop-12dc5.firebaseio.com",
  projectId: "clothing-shop-12dc5",
  storageBucket: "clothing-shop-12dc5.appspot.com",
  messagingSenderId: "37452311837",
  appId: "1:37452311837:web:7c9693998bd9c90ab245f4",
  measurementId: "G-6R0EMPDF4Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log(firestore.doc('users/1243324235dfgsf'))

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;