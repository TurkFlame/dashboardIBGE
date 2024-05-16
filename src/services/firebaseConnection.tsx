import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC_22zx1MOnJMwaYZSLr2bpDgXYriuMmm0",
    authDomain: "desafio-integrador.firebaseapp.com",
    projectId: "desafio-integrador",
    storageBucket: "desafio-integrador.appspot.com",
    messagingSenderId: "856193224411",
    appId: "1:856193224411:web:8af16b5ad9196ae8cb06fe",
    measurementId: "G-74X2GJ0FX2"
  };


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };