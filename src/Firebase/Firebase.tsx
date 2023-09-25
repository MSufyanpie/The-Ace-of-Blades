// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";


import {getAuth,} from "firebase/auth";
import{getStorage}  from "firebase/storage"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
 
  // apiKey: 'AIzaSyCZKAb-izhnTzxmtWowYAJDJXMQ-hBTnrU',
  apiKey:import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY as string ,
  
 
  // authDomain: 'aceofblades-12971.firebaseapp.com',
  authDomain:import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  // projectId: 'aceofblades-12971',
  projectId:import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID as string,
  // storageBucket:'aceofblades-12971.appspot.com',
  storageBucket:import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET as string,
  // messagingSenderId:'183965776583',
  messagingSenderId:import.meta.env.VITE_REACT_APP_FIREBASE_SENDER_ID as string,
  // appId:'1:183965776583:web:1a996369bc90d15b8b9ce2',
  appId:import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID as string,
};


export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const auth=getAuth();
export const db=getFirestore(app)

