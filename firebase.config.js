import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJfmUIpPKN-v9TNTRjnmlJTqZhRtVTrgg",
  authDomain: "tavern-6e3c8.firebaseapp.com",
  projectId: "tavern-6e3c8",
  storageBucket: "tavern-6e3c8.appspot.com",
  messagingSenderId: "513565795552",
  appId: "1:513565795552:web:64c5e01e33801fd42d5c85",
  measurementId: "G-CK6WN5XZVX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("current_user", JSON.stringify(user));
  } else {
    localStorage.removeItem("current_user");
  }
});
