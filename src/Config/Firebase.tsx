// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,} from "firebase/auth";
import{getStorage}  from "firebase/storage"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCZKAb-izhnTzxmtWowYAJDJXMQ-hBTnrU",
  authDomain: "aceofblades-12971.firebaseapp.com",
  projectId: "aceofblades-12971",
  storageBucket: "aceofblades-12971.appspot.com",
  messagingSenderId: "183965776583",
  appId: "1:183965776583:web:1a996369bc90d15b8b9ce2"
};

export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const auth=getAuth();
export const db=getFirestore(app)
