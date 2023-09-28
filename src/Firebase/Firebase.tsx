// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import {getAuth,} from "firebase/auth";
import{getStorage}  from "firebase/storage"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY as string ,
  authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket:import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_SENDER_ID as string,
  appId:import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID as string,
};


export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const auth=getAuth();
export const db=getFirestore(app)

