import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEnUJNOB7suiSd-IFDOgr_OI8JKpooAdw",
  authDomain: "bella-store-e28e8.firebaseapp.com",
  projectId: "bella-store-e28e8",
  storageBucket: "bella-store-e28e8.appspot.com",
  messagingSenderId: "801296702095",
  appId: "1:801296702095:web:5a70494a9d983e8c3f2efa",
  measurementId: "G-R4NG48YFG5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef =  firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(userAuth);

 if (!snapShot.exists) {
  const {displayName, email} = userAuth;
  const creadedDate = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      creadedDate,
      ...additionalData
    })
  } catch (error) {
    console.log('error adding new user',error.message);
  }
 }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
