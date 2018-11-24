import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCqAURWV96GFIOMCIo3fbXtOGUf_bkF-YE",
    authDomain: "vyavastha-7e912.firebaseapp.com",
    databaseURL: "https://vyavastha-7e912.firebaseio.com",
    projectId: "vyavastha-7e912",
    storageBucket: "vyavastha-7e912.appspot.com",
    messagingSenderId: "190672236431"
  };


firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase;