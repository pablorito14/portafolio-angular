import firebase from "firebase/app";
import 'firebase/firestore';
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC08M3UK0WU_vfm6RYgvlctCOwDaqolAjw",
    authDomain: "angular-html-7f46c.firebaseapp.com",
    databaseURL: "https://angular-html-7f46c-default-rtdb.firebaseio.com",
    projectId: "angular-html-7f46c",
    storageBucket: "angular-html-7f46c.appspot.com",
    messagingSenderId: "47230140546",
    appId: "1:47230140546:web:270d7c72d753dd8c9a749b",
    measurementId: "G-GFZK6QND8M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();