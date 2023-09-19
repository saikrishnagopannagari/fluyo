import {doc, getDoc, getFirestore} from 'firebase/firestore';
import firebaseApp from '../config/firebase';

export default {
    async fetchExcercise(docId: string) {
        const docRef = doc(getFirestore(firebaseApp), 'excercises', docId);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) throw new Error('No Data Found!');
        return docSnap.data();
    },
};
