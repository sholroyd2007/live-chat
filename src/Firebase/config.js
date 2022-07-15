import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAzQnV9yQBNqoYhnziNxLkLxHNHWdKVHaE",
    authDomain: "dojo-blog-8cbde.firebaseapp.com",
    projectId: "dojo-blog-8cbde",
    storageBucket: "dojo-blog-8cbde.appspot.com",
    messagingSenderId: "612909719507",
    appId: "1:612909719507:web:fb9f58e9f0394a2e695926"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }