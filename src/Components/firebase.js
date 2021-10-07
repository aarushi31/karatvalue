import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app=firebase.initializeApp({
  apiKey: "AIzaSyBAdW8lx-FuAiKg0bnv0I3LSP-DfnoM1sQ",
  authDomain: "karatvalue.firebaseapp.com",
  projectId: "karatvalue",
  storageBucket: "karatvalue.appspot.com",
  messagingSenderId: "807166388605",
  appId: "1:807166388605:web:c06f929cfac9289200c414"
})

export const auth=app.auth()
export const db=firebase.firestore()
export default app