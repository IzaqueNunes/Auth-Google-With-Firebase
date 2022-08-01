import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOPOLeJd92-1zZhpuePOENsIYBrFREF_Y",
  authDomain: "auth--firebase-f1bfe.firebaseapp.com",
  projectId: "auth--firebase-f1bfe",
  storageBucket: "auth--firebase-f1bfe.appspot.com",
  messagingSenderId: "302035207856",
  appId: "1:302035207856:web:709b4fb2612eb9f72f5d75",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
