const firebase = require("firebase");
const auth = require("firebase/auth");
const {config} = require("~/config");
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

export default (context) => {
  const {
    store
  } = context

  // return new Promise((resolve, reject) => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     store.commit('setUser', user)
  //     resolve()
  //   })
  // })
}
