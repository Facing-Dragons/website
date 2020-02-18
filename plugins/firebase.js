const firebase = require("firebase");
const config = require("~/config");
// Required for side-effects
require("firebase/firestore");

if (!firebase.apps.length) {

  

  firebase.initializeApp(config)
  firebase.firestore().settings({
    timestampsInSnapshots: true
  })
}

const fireDb = firebase.firestore()

export {
  fireDb
}
