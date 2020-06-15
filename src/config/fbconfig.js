import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


//Initialize Firebase
var firebaseConfig = {
   apiKey: "AIzaSyAjkgzz2YPM9PMe9OtSvk7TDhSVBHSEoag",
   authDomain: "webinarapp-8c36b.firebaseapp.com",
   databaseURL: "https://webinarapp-8c36b.firebaseio.com",
   projectId: "webinarapp-8c36b",
   storageBucket: "webinarapp-8c36b.appspot.com",
   messagingSenderId: "963364391218",
   appId: "1:963364391218:web:a98c9573a63b9a32e5ef2b",
   measurementId: "G-RFTE66PPDD"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.analytics();

export default firebase;
