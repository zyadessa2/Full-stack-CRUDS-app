import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD60W9Gj7eWNcr-9Y23NycuxgHuHOFdKZI",
  authDomain: "cruds-7260c.firebaseapp.com",
  projectId: "cruds-7260c",
  storageBucket: "cruds-7260c.appspot.com",
  messagingSenderId: "1081821946047",
  appId: "1:1081821946047:web:9b0c63c102c28b49efa60a",
  measurementId: "G-RPZJER83FD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)