import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA1rO2OugHndDBi5uHpom828Olzkh4RdJI',
  authDomain: 'social-media-app-9c000.firebaseapp.com',
  databaseURL: 'https://social-media-app-9c000.firebaseio.com',
  projectId: 'social-media-app-9c000',
  storageBucket: 'social-media-app-9c000.appspot.com',
  messagingSenderId: '9457864109',
  appId: '1:9457864109:web:b69dded9faf10f08832524',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
