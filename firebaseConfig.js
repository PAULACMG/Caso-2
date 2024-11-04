import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getFunctions } from "firebase/functions";


  const firebaseConfig = {
     apiKey: "AIzaSyAOWU2CSvo32Alx-qvPGtSvD9G3QwFmqXg",
     authDomain: "caso-1-bb33c.firebaseapp.com",
     projectId: "caso-1-bb33c",
     storageBucket: "caso-1-bb33c.appspot.com",
     messagingSenderId: "988423090673",
     appId: "1:988423090673:web:00123f8fe290fb9f789450",
     measurementId: "G-KHRG00PQ31"
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);
   const functions = getFunctions(app);

   export { db, functions };