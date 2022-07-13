
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCWJGSuuzPlA-5NMuh7msVMNZC2Zocm6w",
  authDomain: "simpleblog-4e828.firebaseapp.com",
  projectId: "simpleblog-4e828",
  storageBucket: "simpleblog-4e828.appspot.com",
  messagingSenderId: "269077141784",
  appId: "1:269077141784:web:567df738f8c53b8410666d"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()