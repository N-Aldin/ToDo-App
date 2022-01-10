import React, { createContext, useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  setDoc,
  doc,
  getDocs,
  getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messageSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const colRef = collection(db, 'users');

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      async (cred) => {
        const docRef = doc(colRef, cred.user.uid);

        await getDoc(docRef).then((result) => {
          console.log('Here is the current users document');
          console.log(result.data());
          cred.user.notes = result.data().notes;
        });
        console.log(cred.user);
        setUser(cred.user);
        setLoggedIn(true);
        return true;
      }
    );
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        result.user.notes = [];
        console.log(result.user);
        setUser(result.user);
        setLoggedIn(true);

        setDoc(doc(colRef, result.user.uid), {
          notes: [],
        });
        return true;
      }
    );
  };

  const updateUser = (data) => {
    if (!loggedIn) return;
    setDoc(doc(colRef, user.uid), {
      notes: data,
    });
  };

  const logout = () => {
    setDoc(doc(colRef, user.uid), {
      notes: user.notes,
    }).then(() => {
      signOut(auth).then(() => {
        setLoggedIn(false);
        setUser(null);
        return true;
      });
    });
  };

  const values = {
    user,
    setUser,
    signIn,
    signUp,
    logout,
    updateUser,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
