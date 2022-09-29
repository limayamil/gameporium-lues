import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSURRa89PXAP8K_QgMEOri0edoER6wXSY",
  authDomain: "coderhouse-83d05.firebaseapp.com",
  projectId: "coderhouse-83d05",
  storageBucket: "coderhouse-83d05.appspot.com",
  messagingSenderId: "152028861596",
  appId: "1:152028861596:web:01d9ed2f2e0a17514e0959",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
