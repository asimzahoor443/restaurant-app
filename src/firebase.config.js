import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDV94LZ51_SAu0iMBFzBz7OmWX4r15XwJQ',
  authDomain: 'restaurant-app-107ae.firebaseapp.com',
  databaseURL: 'https://restaurant-app-107ae-default-rtdb.firebaseio.com',
  projectId: 'restaurant-app-107ae',
  storageBucket: 'restaurant-app-107ae.appspot.com',
  messagingSenderId: '528715470438',
  appId: '1:528715470438:web:34477df885236716e57fa7',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
