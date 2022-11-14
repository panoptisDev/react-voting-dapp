import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default class FirestoreService {

    static addElection = async (election) => {
        const docRef = await addDoc(collection(db, "elections"), election);
        console.log(`Election added to database with ID=${docRef.id}`);
    };

    static getElections = async () => {
        const querySnapshot = await getDocs(collection(db, "elections"));
        return querySnapshot.docs.map(doc => doc.data());
    };
}