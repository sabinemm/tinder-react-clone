import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNh4SBVD_YqclvPewg9YWj10QePmjXA3M",
  authDomain: "tinder-clone-36817.firebaseapp.com",
  databaseURL: "https://tinder-clone-36817.firebaseio.com",
  projectId: "tinder-clone-36817",
  storageBucket: "tinder-clone-36817.appspot.com",
  messagingSenderId: "237550675452",
  appId: "1:237550675452:web:d795a91d80776eded13e79",
  measurementId: "G-9V28ZGYYFX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
