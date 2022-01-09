import React, { createContext, useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messageSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const AuthContext = createContext(null);

const auth = getAuth(app);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const signIn = (email, password) => {
    setIsLoading(true);

    return signInWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
      setUser(result.user);
      setLoggedIn(true);
      return true;
    });
  };

  const signUp = (email, password) => {
    setIsLoading(true);

    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        console.log(result.user);
        setUser(result.user);
        setLoggedIn(true);
        return true;
      }
    );
  };

  const logout = () => {
    setIsLoading(true);

    return signOut(auth).then(() => {
      setUser(null);
      setLoggedIn(false);
      return true;
    });
  };

  const values = {
    user,
    signIn,
    signUp,
    logout,
    loggedIn,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
