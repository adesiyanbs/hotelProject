import  firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

export var firebaseConfig = {
    apiKey: "AIzaSyA40chCsqWoV0aYBxzTBR4t5tmjdcl5nNI",
    authDomain: "jeff-project-da8ea.firebaseapp.com",
    projectId: "jeff-project-da8ea",
    storageBucket: "jeff-project-da8ea.appspot.com",
    messagingSenderId: "24460730722",
    appId: "1:24460730722:web:fc08bdfb3d7c831c68cc3b",
    measurementId: "G-E5WJBCKZPG"
};
firebase.initializeApp(firebaseConfig)
// const db = firebase.firestore()
const auth = firebase.auth()
// firebase.analytics();
let db = firebase.database();
// const usersCollection = db.collection('users')
// const hotelsCollection = db.collection('hotels')
// const bookingsCollection = db.collection('bookings')


export { db, auth};