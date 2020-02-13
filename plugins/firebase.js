const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

if (!firebase.apps.length) {

  const config = {
    apiKey: "AIzaSyBZl2uevP2LqC8Bf5zi5Y3GZefTa6P_J8Q",
    authDomain: "facingdragonstest.firebaseapp.com",
    databaseURL: "https://facingdragonstest.firebaseio.com",
    projectId: "facingdragonstest",
    storageBucket: "facingdragonstest.appspot.com",
    messagingSenderId: "155097958588",
    appId: "1:155097958588:web:5a536294886c85677be8b9",
    measurementId: "G-WF5FZMTBTE"
  };

  firebase.initializeApp(config)
  firebase.firestore().settings({
    timestampsInSnapshots: true
  })
}

const fireDb = firebase.firestore()

export {
  fireDb
}
