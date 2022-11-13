import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// CREATE FIRESTORE DATABASE

const firebaseConfig = {
  apiKey: "AIzaSyCXEt6zyfZNLtJvqJ1jfZXViARE9FvPLuo",
  authDomain: "react-voting-dapp.firebaseapp.com",
  projectId: "react-voting-dapp",
  storageBucket: "react-voting-dapp.appspot.com",
  messagingSenderId: "265435700115",
  appId: "1:265435700115:web:7a5209785aadaf0f9ee666"
};

const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);