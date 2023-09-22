// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,} from "firebase/auth";
import{getStorage}  from "firebase/storage"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  //@ts-ignore
  apiKey: process.env.REACT-APP-FIREBASE-API-KEY,
  //@ts-ignore
  authDomain: process.env.REACT-APP-FIREBASE-AUTH-DOMAIN,
  //@ts-ignore
  projectId: process.env.REACT-APP-FIREBASE-PROJECT-ID,
  //@ts-ignore
  storageBucket: process.env.REACT-APP-FIREBASE-STORAGE-BUCKET,
  //@ts-ignore
  messagingSenderId: process.env.REACT-APP-FIREBASE-SENDER-ID,
  //@ts-ignore
  appId: process.env.REACT-APP-FIREBASE-APP-ID,
  
};
//@ts-ignore
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const auth=getAuth();
export const db=getFirestore(app)
