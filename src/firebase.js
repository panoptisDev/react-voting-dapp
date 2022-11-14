import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0MpU8Y4j8Rj78ae7kgwTAMGHDhwZV28I",
  authDomain: "react-voting-dapp-dcb4c.firebaseapp.com",
  projectId: "react-voting-dapp-dcb4c",
  storageBucket: "react-voting-dapp-dcb4c.appspot.com",
  messagingSenderId: "247955431624",
  appId: "1:247955431624:web:41953a32737bff3d5fc5fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);