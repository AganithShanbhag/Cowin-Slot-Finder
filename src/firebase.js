import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMeZ37uT7FJ-yHyt1JvDCsIboExTZbTDg",
  authDomain: "cowin-slot-16444.firebaseapp.com",
  projectId: "cowin-slot-16444",
  storageBucket: "cowin-slot-16444.appspot.com",
  messagingSenderId: "1089755110755",
  appId: "1:1089755110755:web:cdb7f281b4c0b7c0b9c756"
})

export const auth = app.auth()
export default app
