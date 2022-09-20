import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDr_incvRR5EE6jOPvOpqSiuHi9MiJqVaY',
  authDomain: 'react-crud-cb24e.firebaseapp.com',
  projectId: 'react-crud-cb24e',
  storageBucket: 'react-crud-cb24e.appspot.com',
  messagingSenderId: '656237226049',
  appId: '1:656237226049:web:51c1bffb7e8ca744bfbec0',
  measurementId: 'G-NKN9F25S19',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
