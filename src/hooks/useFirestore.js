import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messageSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const DBContext = createContext(null);

// export const getDB = () => {
//   return useContext(DBContext);
// };

// export const DBProvider = ({ children }) => {

//   const test = async () => {
//     await setDoc(doc(db, 'adwadwadwa'), {
//       notes: []
//     })
//   }

//   return <DBContext.Provider>{children}</DBContext.Provider>;
// };

export const test = () => {
  setDoc(doc(db, 'users', 'hello'), {
    notes: [],
    else: 'work',
  });

  console.log('I Ran');
};
