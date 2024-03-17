// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  // apiKey: 'AIzaSyAX5a3mRiR5Db55CL6Db4rYbgWO-QVVK4w',
  // authDomain: 'babysitters-935a9.firebaseapp.com',
  // databaseURL:
  //   'https://babysitters-935a9-default-rtdb.europe-west1.firebasedatabase.app',
  // projectId: 'babysitters-935a9',
  // storageBucket: 'babysitters-935a9.appspot.com',
  // messagingSenderId: '626277360668',
  // appId: '1:626277360668:web:5d3d4837bec1e7ef536bd9',
  // measurementId: 'G-27S6LGZFH3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
