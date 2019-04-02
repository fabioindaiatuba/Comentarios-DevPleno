import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZT-T83Ar9LTfnK5HAc4TssYSHEuPImKM",
    authDomain: "comments-devpleno-1f9a1.firebaseapp.com",
    databaseURL: "https://comments-devpleno-1f9a1.firebaseio.com",
    projectId: "comments-devpleno-1f9a1",
    storageBucket: "comments-devpleno-1f9a1.appspot.com",
    messagingSenderId: "219390966889"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();