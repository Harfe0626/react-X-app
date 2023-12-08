import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBxx8R8wpE4FtmshlhunhCdI_nhDLL-GO0",
  authDomain: "react-twitter-app-e8b1f.firebaseapp.com",
  projectId: "react-twitter-app-e8b1f",
  storageBucket: "react-twitter-app-e8b1f.appspot.com",
  messagingSenderId: "640841237124",
  appId: "1:640841237124:web:031c06def41da1758d78d1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);