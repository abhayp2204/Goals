// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDukGDqaFxNaiFq_ZIQjPPW1XOwKOm23_4",
    authDomain: "goalsetter-3b1a7.firebaseapp.com",
    projectId: "goalsetter-3b1a7",
    storageBucket: "goalsetter-3b1a7.appspot.com",
    messagingSenderId: "542068256931",
    appId: "1:542068256931:web:b10b96f46d95925fa9cf16",
    measurementId: "G-XWPH3NV703"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();