import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCc_AUBCQ6JA7RVTwlBBey_IH6NynoN_ok",
  authDomain: "blog-app-class.firebaseapp.com",
  projectId: "blog-app-class",
  storageBucket: "blog-app-class.appspot.com",
  messagingSenderId: "7754728015",
  appId: "1:7754728015:web:015c3df0520f48c5aa603a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)