import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
        apiKey: "AIzaSyDD2Aw3z8QfNZEkNAnzSfpPLfY1X3ol5VY",
        authDomain: "my-portfolio-4a90a.firebaseapp.com",
        projectId: "my-portfolio-4a90a",
        storageBucket: "my-portfolio-4a90a.appspot.com",
        messagingSenderId: "880687646393",
        appId: "1:880687646393:web:318fc3715770e6b383bd68",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);