// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth,} from "firebase/auth";
import{getStorage}  from "firebase/storage"
import {getFirestore} from 'firebase/firestore'
// const firebaseConfig = {
//   apiKey: "AIzaSyAFYTA7y4MRvVnihKEvpRexQS3jNfG-Rj8",
//   authDomain: "the-ace-of-blades-2023.firebaseapp.com",
//   projectId: "the-ace-of-blades-2023",
//   storageBucket: "the-ace-of-blades-2023.appspot.com",
//   messagingSenderId: "183097255076",
//   appId: "1:183097255076:web:f1b62c96a8d50d344af231",
//   measurementId: "G-B4570Q8CMT"
// };
  

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
