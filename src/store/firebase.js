import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGNQ3DFqW9juN1yt28d4HuV0OJJ2nFW7I",
  authDomain: "host-ab38b.firebaseapp.com",
  projectId: "host-ab38b",
  storageBucket: "host-ab38b.appspot.com",
  messagingSenderId: "557800171382",
  appId:"1:557800171382:web:d061547a44366d88c67c57",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);

export { auth };
