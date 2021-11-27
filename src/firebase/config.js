import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAjDZ72g7n7tUo5Da1g9Ba-8dMV5V7IfBw',
  authDomain: 'purple-puppy-recipes.firebaseapp.com',
  projectId: 'purple-puppy-recipes',
  storageBucket: 'purple-puppy-recipes.appspot.com',
  messagingSenderId: '390257634376',
  appId: '1:390257634376:web:3fefb1144e97abff2d3c7d',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
